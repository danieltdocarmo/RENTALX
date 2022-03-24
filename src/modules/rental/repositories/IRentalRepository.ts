import { Rental } from "../infra/typeorm/entities/Rental";

interface IRequest{
    car_id:string;
    user_id:string;
    expected_return_date: Date;
}

interface IRentalRepository{
   
    create(data:IRequest): Promise<void>;

    findOpenRentalByCar(car_id: string): Promise<Rental>;
   
    findOpenRentalByUser(user_id: string): Promise<Rental>;

    findById(id: string): Promise<Rental>;

    save(rental: Rental): Promise<void>

    findByUserId(user_id: string):Promise<Rental>;

    

} export { IRentalRepository }