import dayjs from "dayjs";
import { DateProvider } from "../../../../shared/container/Provider/DateProvider/Implementations/DateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../../accounts/infra/typeorm/entities/User";
import { UsersRepositoryInMemory } from "../../../accounts/infra/typeorm/Repositories/InMemory/UsersRepositoryInMemory";
import { IUserRepository } from "../../../accounts/repositories/IUserRepository";
import { Car } from "../../../cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "../../../cars/repositories/ICarsRepository";
import { CarsRepositoryInMemory } from "../../../cars/repositories/InMemory/CarsRepositoryInMemory";
import { RentalRepositoryInMemory } from "../../repositories/implementation/RentalRepositoryInMemory";
import { IRentalRepository } from "../../repositories/IRentalRepository";
import { CreateRentalService } from "./CreateRentalService";

describe("Create new Rental use cases", ()=>{
    let rentalsRepository : IRentalRepository;
    let createRentalService: CreateRentalService;
    let carsRepository : ICarsRepository;
    let userRepository : IUserRepository;
    let dateProvider: IDateProvider;
    let car: Car;
    let carTwo: Car;
    let user: User;
    const dayAdd24Hours = dayjs().add(1, 'day').toDate();

    beforeEach(async () => {
       

       carsRepository = new CarsRepositoryInMemory;
       userRepository = new UsersRepositoryInMemory;
       dateProvider = new DateProvider();
       rentalsRepository = new RentalRepositoryInMemory();
       createRentalService = new CreateRentalService(rentalsRepository, dateProvider);

       car = await carsRepository.create({
            name: 'gol',
            description: 'shipper',
            brand: 'vw',
            daily_rate: 1.0,
            license_plate: 'xxx-xxx',
            fine_amount: 1.0
        });

        carTwo = await carsRepository.create({
            name: 'uno',
            description: 'shipper',
            brand: 'fiat',
            daily_rate: 1.0,
            license_plate: 'xxx-xxx',
            fine_amount: 1.0
        });

        user = new User();
        
        Object.assign(user, {
            name: 'John Doe',
            email: 'johndoe@rentx.com',
            password: '123',
            driver_license: 'xxxxxxxxxxxxx'
        });

        await userRepository.create(user);
    });

    it('Should be able to create a new Rental', async ()=>{
        
        await createRentalService.execute({
            car_id: car.id,
            user_id:user.id,
            expect_return_date: dayAdd24Hours
        });

        const rental = await rentalsRepository.findOpenRentalByCar(car.id);

        expect(rental).toHaveProperty('id');
        
    });

    it('Should not be able to create a new Rental for a car already rented', async () => {
        await createRentalService.execute({
            car_id: car.id,
            user_id:user.id,
            expect_return_date: dayAdd24Hours
        });

        expect(async () => {
           
            await createRentalService.execute({
                car_id: car.id,
                user_id:user.id,
                expect_return_date: dayAdd24Hours
            });

        }).rejects.toBeInstanceOf(AppError);
    });

    it('Should not be able to create a new Rental for a user already have one rental active', async ()=>{
        await createRentalService.execute({
            car_id: car.id,
            user_id:user.id,
            expect_return_date: dayAdd24Hours
        });

        expect(async () => {
           
            await createRentalService.execute({
                car_id: carTwo.id,
                user_id:user.id,
                expect_return_date: dayAdd24Hours
            });
            
        }).rejects.toBeInstanceOf(AppError);
    })

    it('Should not be able to create a new Rental with less then 24 hours for expected return', async () => {
        expect(async ()=>{
            await createRentalService.execute({
                car_id: car.id,
                user_id:user.id,
                expect_return_date: new Date(Date.now())
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});