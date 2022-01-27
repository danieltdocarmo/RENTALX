import {Router} from 'express';
import '../shared/container';

import { categoriesRouter } from './categories.routes';
import { specificationRouter } from './specifications.routes';
import { usersRoutes } from './users.routes';
import { authenticationsRoutes } from './authentication.routes'; 

const rentalxRoutes = Router();

rentalxRoutes.use('/specifications', specificationRouter);
rentalxRoutes.use('/categories', categoriesRouter);
rentalxRoutes.use('/users', usersRoutes);
rentalxRoutes.use(authenticationsRoutes);

export { rentalxRoutes };