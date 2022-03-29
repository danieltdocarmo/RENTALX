import {Router} from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../../../../modules/cars/UseCases/CreateCategory/CreateCategoryController';
import { ImportFileController } from '../../../../modules/cars/UseCases/ImportFileUseCase/ImportFileController';
import { ListCategoryController } from '../../../../modules/cars/UseCases/ListCategoryUseCase/ListCategoryController';
import ensureAuthentication from '../middlewares/ensureAuthentication';

const fileUpload = multer({
    dest: './temp'
});

const categoriesRouter = Router();

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const importFileController = new ImportFileController();

categoriesRouter.post('/', ensureAuthentication, createCategoryController.handle);

categoriesRouter.get('/', listCategoryController.handle);

categoriesRouter.post('/import', fileUpload.single('file'), importFileController.handle);

export {categoriesRouter};