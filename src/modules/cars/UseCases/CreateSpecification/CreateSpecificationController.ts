import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryService } from "../CreateCategoryUseCase/CreateCategoryService";

class CreateSpecificationController{
    
    async handle(request: Request, response:Response): Promise<void>{
        const {name, description} = request.body;
        
        const createSpecificationService = container.resolve(CreateCategoryService);
 
            await createSpecificationService.execute({name, description});
        
            response.status(200).json({message: "ok"});
       
    }

} export { CreateSpecificationController };