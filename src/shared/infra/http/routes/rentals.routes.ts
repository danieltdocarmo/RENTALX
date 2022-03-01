import { Router } from 'express';
import { CreateRentalController } from '../../../../modules/rental/UseCases/CreateRental/CreateRentalController';
import ensureAuthentication from '../middlewares/ensureAuthentication';

const rentalsRoutes = Router();
const createRentalController = new CreateRentalController();

rentalsRoutes.use('/', ensureAuthentication, createRentalController.handle);