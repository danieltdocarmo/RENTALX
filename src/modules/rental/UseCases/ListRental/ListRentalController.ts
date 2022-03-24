import {Request, Response} from 'express';
import {container} from 'tsyringe';
import { ListRentalService } from './ListRentalService';

class ListRentalController {
    
    async handle(request: Request, response:Response):Promise<Response>{
        
        const {id} = request.user;
       
        const listRentalService = container.resolve(ListRentalService);

        const rentals = await listRentalService.execute(id);

        return response.status(201).json(rentals);
    }
} export { ListRentalController }

