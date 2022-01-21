import { Request, Response } from "express";
import { CreateSpecificationService } from "./CreateSpecificationtService";

class CreateSpecificationController{
    constructor(private createSpecificationService: CreateSpecificationService){}
    
    async handle(request: Request, response:Response): Promise<void>{
        const {name, description} = request.body;
        await this.createSpecificationService.execute({name, description});
        
        response.status(200).json({message: "ok"});
    }

} export { CreateSpecificationController };