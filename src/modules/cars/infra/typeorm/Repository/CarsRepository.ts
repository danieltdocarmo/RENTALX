import { getRepository, Repository } from "typeorm";
import { IDTOCar, IDTOCarFilter  } from "../../../DTOs/car";
import { ICarsRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository{
   private repository: Repository<Car>;

   constructor(){
       this.repository = getRepository(Car);
   }
   
   async findById(car_id: string): Promise<Car> {
      return await this.repository.findOne(car_id);
    }

    async create(data: IDTOCar): Promise<Car> {
        const car = this.repository.create(data);

        const createdCar = await this.repository.save(car);

        return car;
    }

    async findByLicense_plate(license_plate: string): Promise<Car> {
        return await this.repository.findOne({license_plate});
    }

    async listAllCarsAvailables(name?: string, brand?:string, category_id?:string): Promise<Car[]> {
        const carsQuery = this.repository
        .createQueryBuilder("c")
        .where("available = :available", { available: true});
        
        if(brand){
            carsQuery.andWhere("c.brand = :brand", { brand})
        }
    
        if(name){
            carsQuery.andWhere("c.name = :name", { name})
        }

        if(category_id){
            carsQuery.andWhere("c.category_id = :category_id", { category_id})
        }
  
        const cars = await carsQuery.getMany();
        
        return cars;
    }

} export { CarsRepository };