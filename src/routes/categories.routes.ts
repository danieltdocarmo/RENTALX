import {Router} from 'express';
import { createCategoryController } from '../modules/cars/UseCases/CreateCategoryUseCase';
import { listCategoryController } from '../modules/cars/UseCases/ListCategoryUseCase';

const categoriesRouter = Router();

categoriesRouter.post('/', (request, response) => {
   createCategoryController.handle(request, response);
});

categoriesRouter.get('/', (_request, response) => {
    listCategoryController.handle(response);
});

export {categoriesRouter};