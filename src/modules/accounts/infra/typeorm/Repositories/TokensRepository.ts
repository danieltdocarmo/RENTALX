import { getRepository, Repository } from "typeorm";
import { IToken, ITokenRepository } from "../../../repositories/ITokenRepository";
import { Token } from "../entities/Token";

class TokensRepository implements ITokenRepository {
    private tokenRepository: Repository<Token>;
    
    constructor(){
        this.tokenRepository = getRepository(Token);
    }

    async create({ refresh_token, user_id, expires_at }: IToken): Promise<Token> {
        const token = this.tokenRepository.create({ refresh_token, 
            user_id, 
            expires_at 
        });

        return await this.tokenRepository.save(token);
    }
   

} export { TokensRepository } 