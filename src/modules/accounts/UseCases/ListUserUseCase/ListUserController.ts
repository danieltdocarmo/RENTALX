import { Request, response, Response } from "express";
import { container } from "tsyringe";
import { ListUserService } from "./ListUserService";

class ListUserController{

    async handle(request:Request, reponse: Response){
        console.log('why?');
        const listUserService = container.resolve(ListUserService);
    
        
        const usersList = await listUserService.execute();
        
        return response.status(200).json(usersList);
    }

} export {ListUserController};