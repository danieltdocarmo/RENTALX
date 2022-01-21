import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/Repository/SpecificationsRepository';
import  createSpecificationController  from '../modules/cars/UseCases/CreateSpecification';

const specificationRouter = Router();



specificationRouter.post('/', (request, response) => {
    createSpecificationController().handle(request, response);
});

specificationRouter.get('/', (request, response)=> {
    

    response.status(200);
});

export {specificationRouter};