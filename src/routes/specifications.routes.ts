import { response, Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/Repository/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/UseCases/CreateSpecification';



const specificationRouter = Router();
const specificationRepository = new SpecificationsRepository();


specificationRouter.post('/', (request, response) => {
    createSpecificationController.handle(request, response);
});

specificationRouter.get('/', (request, response)=> {
    const specificationList = specificationRepository.list();

    response.status(200).json(specificationList);
});

export {specificationRouter};