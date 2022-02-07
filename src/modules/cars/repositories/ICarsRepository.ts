import { IDTOCar, IDTOCarFilter } from "../DTOs/car";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository{

      create(data: IDTOCar): Promise<Car>;
      
      findByLicense_plate(license_plate: string):Promise<Car>;

      findById(car_id: string):Promise<Car>;
      
      listAllCarsAvailables(
            name?:string,
            brand?:string,
            category_id?:string
            ):Promise<Car[]>; 
      
} export { ICarsRepository }