import { Request, Response } from "express";
import { CreateSpecificationService } from "./CreateSpecificationtService";

class CreateSpecificationController{
    constructor(private createSpecificationService: CreateSpecificationService){}
    
    handle(request: Request, response:Response): void{
        const {name, description} = request.body;
        this.createSpecificationService.execute({name, description});
        
        response.status(200).json({message: "ok"});
    }

} export { CreateSpecificationController };