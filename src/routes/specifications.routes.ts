import { response, Router } from 'express';
import { CreateSpecificationService } from '../modules/cars/ services/CreateSpecificationtService';
import { SpecificationRepository } from '../modules/cars/Repository/SpecificationRepository';



const specificationRouter = Router();
const specificationRepository = new SpecificationRepository();


specificationRouter.post('/', (request, response) => {
    const {name, description} = request.body;
    const createSpecificationService = new CreateSpecificationService(specificationRepository);
    
    createSpecificationService.execute({name, description});

    response.status(200);
});

specificationRouter.get('/', ()=> {
    const specificationList = specificationRepository.list();

    response.status(200).json(specificationList);
});

export {specificationRouter};