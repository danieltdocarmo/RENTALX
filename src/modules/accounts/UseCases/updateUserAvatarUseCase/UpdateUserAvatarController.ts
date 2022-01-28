import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarService } from "./UpdateUserAvatarService";

class UpdateUserAvatarController{
     

     async handle(request: Request, response: Response ):Promise<void>{
        const {id} = request.user;
        const avatarFile = request.file.fieldname;

        const updateUserAvatarService = container.resolve(UpdateUserAvatarService);
        
        await updateUserAvatarService.execute({userId: id, avatarFile});

        response.status(204).send();
    
    }
} export { UpdateUserAvatarController }