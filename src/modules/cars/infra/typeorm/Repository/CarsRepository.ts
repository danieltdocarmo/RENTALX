import { getRepository, Repository } from "typeorm";
import { IDTOCar } from "../../../DTOs/car";
import { ICarsRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository{
   private repository: Repository<Car>;

   constructor(){
       this.repository = getRepository(Car);
   }

    async create(data: IDTOCar): Promise<void> {
        const car = this.repository.create(data);

        await this.repository.save(car);
    }

    async findByLicense_plate(license_plate: string): Promise<Car> {
        return await this.repository.findOne({license_plate});
    }

} export { CarsRepository };