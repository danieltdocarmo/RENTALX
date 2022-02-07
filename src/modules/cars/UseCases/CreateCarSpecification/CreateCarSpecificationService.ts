import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { ICarsSpecificationRepository, IDTOCarsSpecificationRequest } from "../../repositories/ICarsSpecificationsRepository";



@injectable()
class CreateCarSpecificationService{
    constructor(
        @inject('CarsSpecificationsRepository')
        private carsSpecificationRepository : ICarsSpecificationRepository,
        @inject('CarsRepository')
        private carsRepository: ICarsRepository
    ){}

    async execute({car_id, specifications_id}:IDTOCarsSpecificationRequest):Promise<void>{
        const userExists = await this.carsRepository.findById(car_id);

        if(!userExists){
            throw new AppError(401, 'Car not exists');
        }

        await this.carsSpecificationRepository.create({car_id, specifications_id});
        
    }

} export { CreateCarSpecificationService }