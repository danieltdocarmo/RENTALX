import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../Repositories/Implementations/IUserRepository";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken'; 
import { AppError } from "../../../../errors/AppError";

interface IUserToken{
    token: string;
    user: {
        email : string,
        name: string
    };
}

type IUser = {
    email: string;
    password: string;
}

@injectable()
class UserAuthenticationService{
    constructor(
        @inject('UsersRepository')
        private userRepository: IUserRepository){
    }

    async execute({email, password}: IUser): Promise<IUserToken>{
        const userFinded = await this.userRepository.findByEmail(email);

        if(!userFinded){
            throw new AppError(401, 'Email not matched');
        }

        const match = await compare(password, userFinded.password);

        if(!match){
            throw new AppError(401, 'Password not matched');
        }

        const token = sign({},
             '5ea21157384b8412247666524f8605193a41b3535104a91950970c2b9856af32', 
             { subject: userFinded.id,
                expiresIn : '1d'
            });
        
        
        return {
            token,
            user : {
                name : userFinded.name,
                email : userFinded.email
            }
        }  
    }

}export {UserAuthenticationService}