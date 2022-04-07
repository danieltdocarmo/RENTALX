import { getRepository, Repository } from "typeorm";
import { IToken, ITokenRepository } from "../../../repositories/ITokenRepository";
import { Token } from "../entities/Token";
import { User } from "../entities/User";

class TokensRepository implements ITokenRepository {
    private tokenRepository: Repository<Token>;
    
    constructor(){
        this.tokenRepository = getRepository(Token);
    }

    async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<Token> {
        return await this.tokenRepository.findOne({
            user_id,
            refresh_token
        });
    }
    
    async delete(refresh_token: string): Promise<void> {
        await this.tokenRepository.delete({refresh_token});
    }

    async create({ refresh_token, user_id, expires_at }: IToken): Promise<Token> {
        const token = this.tokenRepository.create({ refresh_token, 
            user_id, 
            expires_at 
        });

        return await this.tokenRepository.save(token);
    }
   

} export { TokensRepository } 