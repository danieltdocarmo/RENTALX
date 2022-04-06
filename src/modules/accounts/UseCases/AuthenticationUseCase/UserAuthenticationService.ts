import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken'; 
import { AppError } from "../../../../shared/errors/AppError";
import auth from "../../../../config/auth";
import { ITokenRepository } from "../../repositories/ITokenRepository";


interface IUserToken{
    token: string;
    user: {
        email : string,
        name: string
    };
    refreshToken: string;
}

type IUser = {
    email: string;
    password: string;
}

@injectable()
class UserAuthenticationService{
    constructor(
        @inject('UsersRepository')
        private userRepository: IUserRepository,
        @inject('TokenRepository')
        private tokenRepository: ITokenRepository,
        @inject('DateProvider')
        private dateProvider: IDateProvider
        ){
    }

    async execute({email, password}: IUser): Promise<IUserToken>{
        const {tokenSecret, 
               expiresToken,
               expiresRefreshToken,
               refreshTokenSecret,
               expiresRefreshTokenNumber
            } = auth;
        
            const userFinded = await this.userRepository.findByEmail(email);

        if(!userFinded){
            throw new AppError(401, 'Email not matched');
        }

        const match = await compare(password, userFinded.password);

        if(!match){
            throw new AppError(401, 'Password not matched');
        }

        const token = sign({},
             tokenSecret, 
             { subject: userFinded.id,
                expiresIn : expiresToken
            });

        const refreshToken = sign({email},
            refreshTokenSecret, 
            { subject: userFinded.id,
              expiresIn : expiresRefreshToken
            });

        await this.tokenRepository.create({
            user_id: userFinded.id,
            refresh_token: refreshToken,
            expires_at: this.dateProvider.addDays(expiresRefreshTokenNumber) 
        });
        
        
        return {
            token,
            user : {
                name : userFinded.name,
                email : userFinded.email
            },
            refreshToken
        }  
    }

}export {UserAuthenticationService}