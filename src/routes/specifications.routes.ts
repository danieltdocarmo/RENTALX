import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/UseCases/CreateSpecification/CreateSpecificationController';

const specificationRouter = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRouter.post('/', createSpecificationController.handle);

specificationRouter.get('/', (request, response)=> {
    response.status(200);
});

export {specificationRouter};