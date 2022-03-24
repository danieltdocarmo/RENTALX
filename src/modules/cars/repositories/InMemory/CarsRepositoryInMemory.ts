import { IDTOCar, IDTOCarFilter } from "../../DTOs/car";
import { ICarsRepository } from "../ICarsRepository";
import { Car } from "../../infra/typeorm/entities/Car";

class CarsRepositoryInMemory implements ICarsRepository{
     
    private carsRepository: Car[];
    
    constructor(){
        this.carsRepository = [];
    }
   
    async changeAvailableCarStatusTo(available: boolean, id: string): Promise<void> {
            this.carsRepository.forEach((car, index) => {
            if(car.id == id)
                this.carsRepository[index].available = available;
        });
    }
    
    async findById(car_id: string): Promise<Car> {
        return this.carsRepository.find(car => car.id === car_id);
    }

    async listAllCarsAvailables( 
        name?:string,
        brand?:string,
        category_id?:string): Promise<Car[]> {
        
        if(name || brand || category_id){
            return this.carsRepository.filter(car => car.available === true)
            .filter(car => (
                (name && car.name == name || 
                 brand && car.brand == brand || 
                 category_id && car.category_id == category_id)
            ));
        }else{
            return this.carsRepository.filter(car => car.available === true)
        }
      
    }

    async create(data: IDTOCar):Promise<Car>{
        const car = new Car();

        Object.assign(car, data);

        this.carsRepository.push(car);

        return car;
    }

    async findByLicense_plate(license_plate: string): Promise<Car> {
        return this.carsRepository.find(car => car.license_plate == license_plate);
    }

} export { CarsRepositoryInMemory};