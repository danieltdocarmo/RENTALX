
import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IDTOUser, IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserService{
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUserRepository 
    ){}
    
    async execute({name, email, password, driver_license}: IDTOUser): Promise<void>{

        const emailFinded = await this.usersRepository.findByEmail(email);
        const driver_licenseFinded = await this.usersRepository.findByDriver_license(driver_license);

        if(emailFinded || driver_licenseFinded){
            throw new AppError(409, 'User already exists');
        }

        const passwordEncrypted = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            password: passwordEncrypted,
            driver_license
        });
    }
} export {CreateUserService};