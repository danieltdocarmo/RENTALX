import {Router} from 'express';
import { categoriesRouter } from './categories.routes';
import { specificationRouter } from './specifications.routes';

const rentalxRoutes = Router();

rentalxRoutes.use('/specifications', specificationRouter);
rentalxRoutes.use('/categories', categoriesRouter);

export { rentalxRoutes };