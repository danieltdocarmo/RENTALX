import {Router} from 'express';
import  createCategoryController  from '../modules/cars/UseCases/CreateCategoryUseCase';
import listCategoryController  from '../modules/cars/UseCases/ListCategoryUseCase';
import multer from 'multer';
import { importFileController } from '../modules/cars/UseCases/ImportFileUseCase';

const fileUpload = multer({
    dest: './temp'
});

const categoriesRouter = Router();

categoriesRouter.post('/', async (request, response) => {
   await createCategoryController().handle(request, response);
});

categoriesRouter.get('/', async (_request, response) => {
    await listCategoryController().handle(response);
});

categoriesRouter.post('/import', fileUpload.single('file'), (request, response) => {
    importFileController.handle(request, response);
});

export {categoriesRouter};