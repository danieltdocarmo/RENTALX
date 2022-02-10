import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarSpecificationService } from "./CreateCarSpecificationService";

class CreateCarSpecificationsController{

    async handle(request:Request, response:Response):Promise<Response>{
        const {id:car_id} = request.params;
        const {specifications_ids} = request.body;

        const createCarSpecificationsService = container.resolve(CreateCarSpecificationService);
        
        await createCarSpecificationsService.execute({car_id, specifications_ids});        
        
        return response.status(201).send();
    }
} export { CreateCarSpecificationsController }