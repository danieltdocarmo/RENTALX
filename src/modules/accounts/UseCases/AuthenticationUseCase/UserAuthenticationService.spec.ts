import { AppError } from "../../../../errors/AppError";
import { IDTOUser, IUserRepository } from "../../Repositories/Implementations/IUserRepository";
import { UsersRepositoryInMemory } from "../../Repositories/InMemory/UsersRepositoryInMemory";
import { CreateUserService } from "../CreateUserUseCase/CreateUserService";
import { UserAuthenticationService } from "./UserAuthenticationService";

let usersRepositoryInMemory: IUserRepository;
let userAuthenticationService:UserAuthenticationService; 
let createUserService: CreateUserService;
let user: IDTOUser;

describe('UserAuthentication', () => {
    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserService = new CreateUserService(usersRepositoryInMemory);
        userAuthenticationService = new UserAuthenticationService(usersRepositoryInMemory);
       
    });

    it('Should be able to create a new session', async ()=>{
        user = {
            name: 'John Doe',
            email: 'johndoe@rentx.com',
            password: 'imjohndoe',
            driver_license: '12345678901'
        }

        await createUserService.execute(user);

        const authenticatedUser = await userAuthenticationService.execute({
                email: user.email,
                password: user.password
            });
    
        expect(authenticatedUser).toHaveProperty('token');
    }); 

    it('Should not be able to create a new session with wrong email', async ()=>{
        expect(async () => {
            await createUserService.execute(user);

            await userAuthenticationService.execute({
                email: "imnotjohndoe@rentx.com",
                password: user.password
            });
    
        }).rejects.toBeInstanceOf(AppError);
    });

    it('Should not be able to create a new session with wrong password', async ()=>{
        expect(async () => {
            await createUserService.execute(user);

            await userAuthenticationService.execute({
                email: user.email,
                password: "imnotjohndoe"
            });
    
        }).rejects.toBeInstanceOf(AppError);
    });
});