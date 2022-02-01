import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IDTOCar } from "../../DTOs/car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class CreateCarService{
    constructor(
        @inject('CarsRepository')
        private carsRepository: ICarsRepository
    ){}

    async execute(data: IDTOCar): Promise<void>{
        const findedCar = await this.carsRepository.findByLicense_plate(data.license_plate);

        if(findedCar){
            throw new AppError(409,'License Plate already exists');
        }
        
        await this.carsRepository.create(data);
    }

} export { CreateCarService}