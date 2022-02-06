import { inject, injectable } from "tsyringe";
import { IDTOCarFilter } from "../../DTOs/car";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class ListAllAvailableCarsService{
    
    constructor(
        @inject('CarsRepository')
        private carsRepository: ICarsRepository
    ){}

    async execute({name, brand, category_id}:IDTOCarFilter):Promise<Car[]>{
        
        const allAvailablesCars = await this.carsRepository.listAllCarsAvailables(name, brand, category_id);       
       
        return allAvailablesCars;
    }

} export { ListAllAvailableCarsService }