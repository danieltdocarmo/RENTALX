import { container } from "tsyringe";
import {Request, Response} from 'express';
import { CreateUserService } from "./CreateUserService";

class CreateUserController{

    async handle(request: Request, response: Response){
        const {name, email, username, password, driver_license} = request.body;

        const createUserService = container.resolve(CreateUserService);

        await createUserService.execute({name, email, username, password, driver_license});
    
        response.status(201).send();
    }

} export {CreateUserController}