import { IDTOCar } from "../DTOs/car";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository{

      create(data: IDTOCar): Promise<void>;
      
      findByLicense_plate(license_plate: string):Promise<Car>;
      
} export { ICarsRepository }