import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../../errors/AppError";
import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/Repositories/UsersRepository";
import auth from "../../../../config/auth";
import { TokensRepository } from "../../../../modules/accounts/infra/typeorm/Repositories/TokensRepository";

interface IToken{
    sub: string;
}

export default async function ensureAuthentication(request:Request, response:Response, next:NextFunction){
    const userRepository = new UsersRepository();
    const tokenRepository = new TokensRepository();

    const {authorization} = request.headers;

    if(!authorization){
        throw new AppError(401, 'token is missing')
    }

    const [, token] = authorization.split(" ");

    try{
   
        const { sub: userId } = 
        verify(token, 
            auth.refreshTokenSecret) as IToken;
        
        const userAndToken = await tokenRepository.findByUserIdAndRefreshToken(authorization, userId);


        if(!userAndToken){
            throw new AppError(401, 'User not found');
        }

        request.user = {
            id: userId
        }

        
        next();
    } catch(e){
        throw new AppError(401, 'Invalid Token')
    }
}