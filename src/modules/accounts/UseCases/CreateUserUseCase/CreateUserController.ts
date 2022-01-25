import { container } from "tsyringe";
import {Request, Response} from 'express';
import { CreateUserService } from "./CreateUserService";

class CreateUserController{

    async handle(request: Request, response: Response){
        const {name, email, password, driver_license} = request.body;
        console.log({name, email, password, driver_license});
        const createUserService = container.resolve(CreateUserService);

        await createUserService.execute({name, email, password, driver_license});
    
        return response.status(201).send();
    }

} export {CreateUserController}