import { Request, Response } from "express";
import { container } from "tsyringe";
import { DevolutionRentalService } from "./DevolutionRentalService";

class DevolutionRentalController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const devolutionRentalService = container.resolve(DevolutionRentalService);

        await devolutionRentalService.execute(id);
    }

} export { DevolutionRentalController } 