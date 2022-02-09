import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { CarsRepositoryInMemory } from "../../repositories/InMemory/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "../../repositories/InMemory/SpecificationsRepositoryInMemory";
import { CreateCarService } from "../CreateCar/CreateCarService";
import { CreateSpecificationService } from "../CreateSpecification/CreateSpecificationService";
import { CreateCarSpecificationService } from "./CreateCarSpecificationService";

describe('CarSpecification use Case', ()=>{
  
   let carsRepository: ICarsRepository;
   let createCarSpecificationService: CreateCarSpecificationService;
   let createCarService: CreateCarService;
   let specificationsRepository: SpecificationsRepositoryInMemory; 
   let createSpecificationService: CreateSpecificationService;

   beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory();
        specificationsRepository = new SpecificationsRepositoryInMemory();
        createCarSpecificationService = new CreateCarSpecificationService(
            specificationsRepository,
            carsRepository)
        createCarService = new CreateCarService(carsRepository);
        createSpecificationService = new CreateSpecificationService(specificationsRepository);
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

        const specification = {
            name : 'Beautifuil',
            description: 'Very beautifuil'
        }

        const createdCar = await createCarService.execute(car);
        const createdSpecification = await createSpecificationService.execute(specification);
        
        const updatedCar = await createCarSpecificationService.execute({
            car_id: createdCar.id, 
            specifications_ids: [createdSpecification.id]
        });

        expect(updatedCar.specifications_cars).toContain(createdSpecification);
        
    });

    it('Should not be able to create a new CarSpecifitions of a car that doesn`t exist', async () => {
        expect(async ()=> {
            const carsSpecifications = { 
                car_id: 'doesn`t exist',
                specifications_ids: ['doesn`t exist']
            }
        
            await createCarSpecificationService.execute(carsSpecifications);
     
        }).rejects.toBeInstanceOf(AppError);
    });

    it('Should not be able to create a new CarSpecifications with less them at lest one valid specification', async ()=>{
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
        
        expect(async ()=>{
            await createCarSpecificationService.execute({
                car_id: createdCar.id, 
                specifications_ids: ['doesn`t exists']
            });
        
        }).rejects.toBeInstanceOf(AppError);
    });
});