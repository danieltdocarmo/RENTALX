import { Router } from 'express';
import { CreateCarController } from '../../../../modules/cars/UseCases/CreateCar/CreateCarController';
import { ListAllAvailableCarsController } from '../../../../modules/cars/UseCases/ListAvailableCars/ListAllAvailableCarsController';
import { UploadImagesCarServiceController } from '../../../../modules/cars/UseCases/UploadImagesCarUseCase/UploadImagesCarServiceController';
import multer from 'multer';
import uploadConfig from '../../../../config/upload';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAllAvailableCarsController = new ListAllAvailableCarsController();
const uploadImagesCarServiceController = new UploadImagesCarServiceController();

//const imagesUpload = multer(uploadConfig.upload('/temp/images'));

carsRoutes.post('/', createCarController.handle);

carsRoutes.get('/', listAllAvailableCarsController.handle);

//carsRoutes.post('/images', imagesUpload.array('images'), uploadImagesCarServiceController.handle);

export {carsRoutes}