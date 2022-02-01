import { IDTOCar } from "../../DTOs/car";
import { ICarsRepository } from "../ICarsRepository";
import { Car } from "../../infra/typeorm/entities/Car";

class CarsRepositoryInMemory implements ICarsRepository{
     
    private carsRepository: Car[];
    
    constructor(){
        this.carsRepository = [];
    }

    async create(data: IDTOCar):Promise<void>{
        const car = new Car;

        Object.assign(car, data);

        this.carsRepository.push(car);
    }

    async findByLicense_plate(license_plate: string): Promise<Car> {
        return this.carsRepository.find(car => car.license_plate == license_plate);
    }

} export { CarsRepositoryInMemory};