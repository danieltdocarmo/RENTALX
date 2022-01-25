import { Request, Response } from "express";
import { container } from "tsyringe";
import { UserAuthenticationService } from "./UserAuthenticationService";

class UserAuthenticationController{
     async handle(request:Request, response:Response){

        const {email, password} = request.body;

        const userAuthenticationService = container.resolve(UserAuthenticationService);

        const userToken = await userAuthenticationService.execute({email, password});

        return response.status(200).json(userToken);
     }
}