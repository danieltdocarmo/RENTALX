import { getRepository, Repository } from "typeorm";
import { IRentalRepository } from "../../../repositories/IRentalRepository";
import { Rental } from "../entities/Rental";

interface IRequest{
    car_id:string;
    user_id:string;
    expect_return_date: Date;
}

class RentalRepository implements IRentalRepository{
    private repository: Repository<Rental>;
    
    constructor(){
        this.repository = getRepository(Rental);
    }

    async create(data: IRequest): Promise<void> {
        const rental = this.repository.create(data);

        await this.repository.save(rental);
    }

    findOpenRentalByCar(car_id: string): Promise<Rental> {
        const findedRental = this.repository.findOne({
            where : {
                car_id,
                end_date : null
            }
        });
        
        return findedRental;
    }

    findOpenRentalByUser(user_id: string): Promise<Rental> {
        const findedRental = this.repository.findOne({
            where : {
                user_id,
                end_date : null
            }
        });
        
        return findedRental;
    }


} export { RentalRepository }