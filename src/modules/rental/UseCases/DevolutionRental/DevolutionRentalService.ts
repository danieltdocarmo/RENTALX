import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../../cars/repositories/ICarsRepository";
import { IRentalRepository } from "../../repositories/IRentalRepository";

@injectable()
class DevolutionRentalService {

    constructor(
        @inject('RentalsRepository')
        private rentalsRepository: IRentalRepository,
        @inject('CarsRepository')
        private carsRepository: ICarsRepository,
        @inject('DateProvider')
        private dateProvider: IDateProvider
    ){}

    async execute(rental_id: string){
        let total: number;

        const rental = await this.rentalsRepository.findById(rental_id);
        
        if(!rental){
            throw new AppError(404, 'No rental found for this id');
        }
        
        const car = await this.carsRepository.findById(rental.car_id);

        if(!car){
            throw new AppError(404, 'No car found for this id');
        }

        const dateNow = this.dateProvider.dateNow();
        
        let dailys = this.dateProvider.compareDateInDays(
                        rental.start_date, 
                        dateNow
                    );

        dailys <= 0 
        ? total += car.daily_rate
        : total += dailys * car.daily_rate

        let delay = this.dateProvider.compareDateInDays(
                        rental.expected_return_date,
                        dateNow   
                    );

        delay > 0 
        ? total += delay * car.fine_amount
        : total += 0

        rental.total = total;

        rental.end_date = dateNow;
        
        await this.rentalsRepository.save(rental);
        await this.carsRepository.changeAvailableCarStatusTo(false, rental.car_id);
    }
} export { DevolutionRentalService }