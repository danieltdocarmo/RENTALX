import { response, Router } from 'express';
import { SpecificationRepository } from '../modules/cars/Repository/SpecificationRepository';
import { createSpecificationController } from '../modules/cars/UseCases/createSpecification';



const specificationRouter = Router();
const specificationRepository = new SpecificationRepository();


specificationRouter.post('/', (request, response) => {
    createSpecificationController.handle(request, response);
});

specificationRouter.get('/', (request, response)=> {
    const specificationList = specificationRepository.list();

    response.status(200).json(specificationList);
});

export {specificationRouter};