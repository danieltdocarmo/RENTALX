import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { ICarsSpecificationRepository } from "../../repositories/ICarsSpecificationsRepository";
import { CarsRepositoryInMemory } from "../../repositories/InMemory/CarsRepositoryInMemory";
import { CarsSpecificationsRepositoryInMemory } from "../../repositories/InMemory/CarsSpecificationsRepositoryInMemory";
import { CreateCarService } from "../CreateCar/CreateCarService";
import { CreateCarSpecificationService } from "./CreateCarSpecificationService";

describe('CarSpecification use Case', ()=>{
   let carsSpecificationsRepository: ICarsSpecificationRepository;
   let carsRepository: ICarsRepository;
   let createCarSpecificationService: CreateCarSpecificationService;
   let createCarService: CreateCarService;

    beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory();
        carsSpecificationsRepository = new CarsSpecificationsRepositoryInMemory();
        createCarSpecificationService = new CreateCarSpecificationService(
            carsSpecificationsRepository,
            carsRepository)
        createCarService = new CreateCarService(carsRepository);
    });

    it('Should be able to create a new CarSpecifications', async () =>{
        const car = {
            name: 'CarName',
            description: 'ImLikeThis',
            daily_rate: 1,
            license_plate: 'XXX-333',
            fine_amount: 1,
            brand: 'MyMaker',
            category_id: 'uuid'
        }

        const createdCar = await createCarService.execute(car);

        
        await createCarSpecificationService.execute({
            car_id: createdCar.id, 
            specifications_id:['doesnt exist']
        });

        throw new AppError(400, "implemets test");
    });

    it('Should not be able to create a new CarSpecifition of a car that doesn`t exist', async () => {
        expect(async ()=> {
            const carsSpecifications = { 
                car_id: 'doesn`t exist',
                specifications_id: ['doesn`t exist']
            }
        
            await createCarSpecificationService.execute(carsSpecifications);
     
        }).rejects.toBeInstanceOf(AppError);
    });
});