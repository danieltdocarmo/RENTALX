import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ITokenRepository } from "../../repositories/ITokenRepository";
import auth from '../../../../config/auth';
import { Token } from "../../infra/typeorm/entities/Token";

interface ISub{
    user_id: string;
    email: string;
}

@injectable()
class RefreshTokenService{

    constructor(
        @inject('RefreshTokenRepository')
        private refreshTokenRepository: ITokenRepository,
        @inject('DateProvider')
        private dateProvider: IDateProvider
    ){}

    async execute(refresh_token: string): Promise<Token>{
        const {user_id, email} = verify(refresh_token, auth.refreshTokenSecret) as ISub;

        const token = await this.refreshTokenRepository.findByUserIdAndRefreshToken(refresh_token, user_id);

        if(!token){
            throw new AppError(403, 'User is not authorization');
        }

        await this.refreshTokenRepository.delete(refresh_token);

        const newRefreshToken = sign({email},
            auth.refreshTokenSecret, 
            { subject: user_id,
              expiresIn : this.dateProvider.addDays(auth.expiresRefreshTokenNumber).toString()
            });

       const newRefreshTokenSaved = await this.refreshTokenRepository.create({
            user_id: user_id,
            refresh_token: newRefreshToken,
            expires_at: this.dateProvider.addDays(auth.expiresRefreshTokenNumber) 
        });

        return newRefreshTokenSaved;


    }

} export { RefreshTokenService}


