import { inject, injectable, injectAll } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
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
        private rentalsRepository: IRentalRepository
    ){}

    async execute(data: IRequest):Promise<void>{
        const { car_id, user_id} = data;

        const rentalByCar = await this.rentalsRepository.findOpenRentalByCar(car_id);

        if(rentalByCar){
            throw new AppError(403, 'Rental for this car already exist');
        }

        const rentalByUser = await this.rentalsRepository.findOpenRentalByUser(user_id);

        if(rentalByUser){
            throw new AppError(403, 'Rental for this user already exist');
        }

        await this.rentalsRepository.create(data);

    }

} export { CreateRentalService }