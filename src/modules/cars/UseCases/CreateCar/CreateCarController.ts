import { Request } from "express";
import { container } from "tsyringe";
import { IDTOCar } from "../../DTOs/car";
import { CreateCarService } from "./CreateCarService";

class CreateCarController{
     
    async handle(request:Request, reponse:Response){
        const {
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand} = request.body;
        const createCarService = container.resolve(CreateCarService);

        await createCarService.execute({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand});
    }
}