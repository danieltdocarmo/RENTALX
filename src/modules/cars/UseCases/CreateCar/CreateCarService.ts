import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IDTOCar } from "../../DTOs/car";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class CreateCarService{
    constructor(
        @inject('CarsRepository')
        private carsRepository: ICarsRepository
    ){}

    async execute(data: IDTOCar): Promise<Car>{
        const findedCar = await this.carsRepository.findByLicense_plate(data.license_plate);

        if(findedCar){
            throw new AppError(409,'License Plate already exists');
        }
        
        const car = await this.carsRepository.create(data);

        return car;
    }

} export { CreateCarService}