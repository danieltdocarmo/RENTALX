import {Router} from 'express';
import { createCategoryController } from '../modules/cars/UseCases/CreateCategoryUseCase';
import { listCategoryController } from '../modules/cars/UseCases/ListCategoryUseCase';
import multer from 'multer';
import { importFileController } from '../modules/cars/UseCases/ImportFileUseCase';

const fileUpload = multer({
    dest: './temp'
});

const categoriesRouter = Router();

categoriesRouter.post('/', (request, response) => {
   createCategoryController.handle(request, response);
});

categoriesRouter.get('/', (_request, response) => {
    listCategoryController.handle(response);
});

categoriesRouter.post('/import', fileUpload.single('file'), (request, response) => {
    importFileController.handle(request, response);
});

export {categoriesRouter};