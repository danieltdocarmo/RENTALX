import { getRepository, Repository } from "typeorm";
import { IRentalRepository } from "../../../repositories/IRentalRepository";
import { Rental } from "../entities/Rental";

interface IRequest{
    car_id:string;
    user_id:string;
    expected_return_date: Date;
}

class RentalRepository implements IRentalRepository{
    private repository: Repository<Rental>;
    
    constructor(){
        this.repository = getRepository(Rental);
    }

    async save(rental: Rental): Promise<void> {
        await this.repository.save(rental);
    }

    async findById(id: string): Promise<Rental> {
        return await this.repository.findOne(id);
    }

    async findByUserId(user_id: string): Promise<Rental> {
        return await this.repository.findOne({
            where: {
                user_id
            }
        })
    }

    async create(data: IRequest): Promise<void> {
        const rental = this.repository.create(data);

        await this.repository.save(rental);
    }

    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        const findedRental = await this.repository.findOne({
            where : {
                car_id,
                end_date : null
            }
        });
        
        return findedRental;
    }

    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const findedRental = await this.repository.findOne({
            where : {
                user_id,
                end_date : null
            },
            relations: ['car']
        });
        
        return findedRental;
    }


} export { RentalRepository }