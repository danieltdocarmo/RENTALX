import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { CarsRepositoryInMemory } from "../../repositories/InMemory/CarsRepositoryInMemory";
import { ListAllAvailableCarsService } from "./ListAllAvailableCarsService";

describe('List All Cars', () => {
    let carsRepository: ICarsRepository;
    let listAllCarsAvailables: ListAllAvailableCarsService;
    let carOne: Car;
    let carTwo: Car;
    let carThree: Car;

    beforeEach(async () => {
        carsRepository = new CarsRepositoryInMemory();
        listAllCarsAvailables = new ListAllAvailableCarsService(carsRepository);
        
        carOne = await carsRepository.create({
            name: "uno",
            description : "shipper",
            daily_rate : 1.0,
            license_plate : "unomile",
            fine_amount: 1.0,
            brand : "Fiat",
            category_id : "37dca599-1e80-4090-96be-f54c2e229635"
        });

        carTwo = await carsRepository.create({
            name: "gol",
            description : "middle",
            daily_rate : 2.0,
            license_plate : "golmile",
            fine_amount: 2.0,
            brand : "VW",
            category_id : "37dca599-1e80-4090-96be-f54c2e229635"
            });

        carThree = await carsRepository.create({
            available: false,
            name: "jetta",
            description : "spencer",
            daily_rate : 3.0,
            license_plate : "jetamile",
            fine_amount: 3.0,
            brand : "VW",
            category_id : "37dca599-1e80-4090-96be-f54c2e229635"
            });
    });

    it('Should be able to list all available cars', async () => {
        const allAvailableCars = await listAllCarsAvailables.execute({});
    
        expect(allAvailableCars).toEqual([carOne, carTwo]);
    });

    it('Should not be able to list unavailable car', async ()=>{
        const allAvailableCars = await listAllCarsAvailables.execute({});

        expect(allAvailableCars).not.toContainEqual([carThree]);
    });

    it('Should be able to list all availables cars by name', async ()=>{
        const allAvailableCars = await listAllCarsAvailables.execute({ name: 'uno'});
    
        expect(allAvailableCars).toEqual([carOne]);
    });

    it('Should be able to list all availables cars by brand', async ()=>{
        const allAvailableCars = await listAllCarsAvailables.execute({brand: 'VW'});
    
        expect(allAvailableCars).toEqual([carTwo]);
    });

    it('Should be able to list all availables cars by category_id', async ()=>{
        const allAvailableCars = await listAllCarsAvailables.execute({category_id: '37dca599-1e80-4090-96be-f54c2e229635'});
    
        expect(allAvailableCars).toEqual([carOne,carTwo]);
    });
    
    it('Should not be able to list filter with not exists', async ()=>{
        const allAvailableCars = await listAllCarsAvailables.execute({
            name: 'anycar',
            brand: 'anybrand',
            category_id: 'anycategory'
        });

        expect(allAvailableCars).toEqual([]);
    })
});