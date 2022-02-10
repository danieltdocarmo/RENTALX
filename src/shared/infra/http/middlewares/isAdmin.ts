import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/Repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";

export default async function isAdmin (request: Request, response: Response, next: NextFunction){

    const {id} = request.user;

    const userRepository = new UsersRepository();

    const user = await userRepository.findById(id);

    if(!user.isAdmin){
        throw new AppError(401, 'User isn`t admin');
    }
    
    next();
}