import { Rental } from "../../infra/typeorm/entities/Rental";
import { IRentalRepository } from "../IRentalRepository";

interface IRequest{
    car_id:string;
    user_id:string;
    expect_return_date: Date;
}

class RentalRepositoryInMemory implements IRentalRepository{
   
    private repository: Rental[];

    constructor(){
        this.repository = [];
    }

    async create(data: IRequest): Promise<void> {
        const rental = new Rental();

        Object.assign(rental, data);

        this.repository.push(rental);
    }
    
    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        return this.repository.find(rental => rental.car_id == car_id && !rental.end_date);
    }
    
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        return this.repository.find(rental => rental.user_id == user_id && !rental.end_date);
    }

} export { RentalRepositoryInMemory }