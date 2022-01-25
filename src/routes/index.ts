import {Router} from 'express';
import { categoriesRouter } from './categories.routes';
import { specificationRouter } from './specifications.routes';

import '../shared/container';
import { usersRoutes } from './users.routes';

const rentalxRoutes = Router();

rentalxRoutes.use('/specifications', specificationRouter);
rentalxRoutes.use('/categories', categoriesRouter);
rentalxRoutes.use('/users', usersRoutes);

export { rentalxRoutes };