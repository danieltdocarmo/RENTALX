import { AppError } from "../../../../shared/errors/AppError";
import { IDTOCar } from "../../DTOs/car";
import { CarsRepositoryInMemory } from "../../repositories/InMemory/CarsRepositoryInMemory";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { CreateCarService } from "./CreateCarService";

let car: IDTOCar;
let carsRepository: ICarsRepository;
let createCarService: CreateCarService;

describe('Create a car', ()=>{
    beforeAll(()=>{
         
        car = {
            name: 'CarName',
            description: 'ImLikeThis',
            daily_rate: 1,
            license_plate: 'XXX-333',
            fine_amount: 1,
            brand: 'MyMaker',
            category_id: 'uuid'
        }

        carsRepository = new CarsRepositoryInMemory();
        createCarService = new CreateCarService(carsRepository);
    });
    
    it('Should be able to create a new car', async ()=>{
        await createCarService.execute(car);

        const findedCar = await carsRepository.findByLicense_plate(car.license_plate);
        
        expect(findedCar).toHaveProperty('id');
    });

    it('Should not be able to create a new car with the same license_plate', async ()=> {
        expect(async ()=>{
            await createCarService.execute(car);
        }).rejects.toBeInstanceOf(AppError);
    });

    it('All cars for default has available true', async () => {
        const findedCar = await carsRepository.findByLicense_plate(car.license_plate);
        expect(findedCar.available).toEqual(true);
    });

});