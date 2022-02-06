import { Router } from 'express';
import { CreateCarController } from '../../../../modules/cars/UseCases/CreateCar/CreateCarController';
import { ListAllAvailableCarsController } from '../../../../modules/cars/UseCases/ListAvailableCars/ListAllAvailableCarsController';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAllAvailableCarsController = new ListAllAvailableCarsController();

carsRoutes.post('/', createCarController.handle);

carsRoutes.get('/', listAllAvailableCarsController.handle)

export {carsRoutes}