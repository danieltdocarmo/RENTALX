import { Request,Response } from "express";
import { container } from "tsyringe";
import { IDTOCarFilter } from "../../DTOs/car";
import { ListAllAvailableCarsService } from "./ListAllAvailableCarsService";

class ListAllAvailableCarsController{
     async handle(request: Request, response: Response): Promise<Response>{
            const {name, brand, category_id}:IDTOCarFilter = request.query;

            const listAllAvailableCarsService = container.resolve(ListAllAvailableCarsService); 
            
            const cars = await listAllAvailableCarsService.execute({name, brand, category_id}); 
            
            return response.status(200).json(cars);
        }
} export { ListAllAvailableCarsController }