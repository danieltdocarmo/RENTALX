import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryService } from "../CreateCategoryUseCase/CreateCategoryService";

class CreateSpecificationController{
    
    async handle(request: Request, response:Response){
        const {name, description} = request.body;
        
        const createSpecificationService = container.resolve(CreateCategoryService);
 
            await createSpecificationService.execute({name, description});
        
        return response.status(200).send();
       
    }

} export { CreateSpecificationController };