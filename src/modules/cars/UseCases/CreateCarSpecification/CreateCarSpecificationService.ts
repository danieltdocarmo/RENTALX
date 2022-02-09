import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface ICarSpecificationsRequest{
    car_id: string,
    specifications_ids: string[]
}

@injectable()
class CreateCarSpecificationService{
    constructor(
        @inject('SpecificationsRepository')
        private specificationsRepository: ISpecificationsRepository,
        @inject('CarsRepository')
        private carsRepository: ICarsRepository
    ){}

    async execute({car_id, specifications_ids}:ICarSpecificationsRequest):Promise<Car>{
        const userExists = await this.carsRepository.findById(car_id);

        if(!userExists){
            throw new AppError(401, 'Car not exists');
        }

        const specificationsFounded = await this.specificationsRepository.findByIds(specifications_ids);
        
        if(!specificationsFounded.length){
            throw new AppError(401, 'Non specifications exists');
        }

        
        userExists.specifications_cars = specificationsFounded;

        const updatedCar = await this.carsRepository.create(userExists);
    
        return updatedCar;
    }

} export { CreateCarSpecificationService }