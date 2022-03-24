import { inject, injectable, injectAll } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../../cars/repositories/ICarsRepository";
import { IRentalRepository } from "../../repositories/IRentalRepository";


interface IRequest{
    car_id:string;
    user_id:string;
    expect_return_date: Date;
}

@injectable()
class CreateRentalService{
    constructor(
        @inject('RentalsRepository')
        private rentalsRepository: IRentalRepository,
        @inject('DateProvider')
        private dateProvider: IDateProvider,
        @inject('CarsRepository')
        private carRepository: ICarsRepository
    ){}

    async execute(data: IRequest):Promise<void>{
        const { car_id, user_id,expect_return_date} = data;

        const rentalByCar = await this.rentalsRepository.findOpenRentalByCar(car_id);

        if(rentalByCar){
            throw new AppError(403, 'This car is unavailable');
        }

        const rentalByUser = await this.rentalsRepository.findOpenRentalByUser(user_id);

        if(rentalByUser){
            throw new AppError(403, 'A rental for this user already exist');
        }
       
        
       const compareResult = this.dateProvider
       .compareDateInHours(expect_return_date, this.dateProvider.dateNow())

        if(compareResult < 24){
            throw new AppError(402, 'Invalid return date');
        }

        await this.rentalsRepository.create(data);

        await this.carRepository.changeAvailableCarStatusTo(false, car_id);

    }

} export { CreateRentalService }