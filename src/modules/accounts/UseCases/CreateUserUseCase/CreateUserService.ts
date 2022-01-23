import { inject, injectable } from "tsyringe";
import { IDTOUser } from "../../Repositories/Implementations/IUserRepository";
import { UserRepository } from "../../Repositories/UserRepository";

@injectable()
class CreateUserService{
    constructor(
        @inject('UsersRepository')
        private usersRepository: UserRepository 
    ){}
    
    async execute({name, username, email, password, driver_license}: IDTOUser): Promise<void>{

        const emailFinded = await this.usersRepository.findByEmail(email);
        const driver_licenseFinded = await this.usersRepository.findByDriver_license(driver_license);

        if(emailFinded || driver_licenseFinded){
            throw new Error('User already exists');
        }

        await this.usersRepository.create({
            name,
            username,
            email,
            password,
            driver_license
        });
    }
} export {CreateUserService};