import { getRepository, Repository } from "typeorm";
import { Rental } from "../../infra/typeorm/entities/Rental";
import { IRentalRepository } from "../IRentalRepository";

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
        const rentalCreated = this.repository.create(data);
        
        await this.repository.save(rentalCreated);

    }
    
    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        const findedRental = await this.repository.findOne({
            where: car_id
        });

        return findedRental;
    }
    
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const findedRental = await this.repository.findOne({
            where: user_id
        });

        return findedRental;
    }
    
}