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
    create(data: IRequest): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findOpenRentalByCar(car_id: string): Promise<Rental> {
        throw new Error("Method not implemented.");
    }
    findOpenRentalByUser(user_id: string): Promise<Rental> {
        throw new Error("Method not implemented.");
    }


} export { RentalRepository }