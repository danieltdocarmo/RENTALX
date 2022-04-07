import { inject, injectable } from "tsyringe";
import {v4 as uuid} from 'uuid';
import { AppError } from "../../../../shared/errors/AppError";
import { ITokenRepository } from "../../repositories/ITokenRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class SendForgotPasswordEmailService{

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUserRepository,
        @inject('TokenRepository')
        private tokenRepository: ITokenRepository,
        @inject('DateProvider')
        private dateProvider: IDateProvider
    ){}

    async execute(email: string){
        const user = await this.usersRepository.findByEmail(email);

        if(!user){
            throw new AppError(402, 'User dosen`t exist');
        }

        const expiresAt = this.dateProvider.addHours(3);

        const token = uuid();

        await this.tokenRepository.create({
            expires_at: expiresAt,
            user_id: user.id,
            refresh_token: token
        });

        

    }
} export { SendForgotPasswordEmailService };