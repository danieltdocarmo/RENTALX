import { Router } from 'express';
import { CreateRentalController } from '../../../../modules/rental/UseCases/CreateRental/CreateRentalController';
import { DevolutionRentalController } from '../../../../modules/rental/UseCases/DevolutionRental/DevolutionRentalController';
import { ListRentalController } from '../../../../modules/rental/UseCases/ListRental/ListRentalController';
import ensureAuthentication from '../middlewares/ensureAuthentication';

const rentalsRoutes = Router();
const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalController = new ListRentalController();

rentalsRoutes.post('/', ensureAuthentication, createRentalController.handle);
rentalsRoutes.put('/devolution/:id', devolutionRentalController.handle);
rentalsRoutes.get('/', ensureAuthentication, listRentalController.handle);