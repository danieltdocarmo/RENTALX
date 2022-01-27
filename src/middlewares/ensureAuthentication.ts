import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/Repositories/UsersRepository";

interface IToken{
    sub: string;
}

const userRepository = new UsersRepository(); 

export default async function ensureAuthentication(request:Request, response:Response, next:NextFunction){
    const {authorization} = request.headers;

    if(!authorization){
        throw new Error('token is missing')
    }

    const [, token] = authorization.split(" ");

    try{
   
        const { sub: userId } = verify(token, "5ea21157384b8412247666524f8605193a41b3535104a91950970c2b9856af32") as IToken;

        const user = await userRepository.findById(userId);

        if(!user){
            throw new Error('User not found');
        }

        next();
    } catch(e){
        throw new Error('Invalid Token')
    }
}