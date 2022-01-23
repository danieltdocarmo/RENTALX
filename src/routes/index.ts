import {Router} from 'express';
import { categoriesRouter } from './categories.routes';
import { specificationRouter } from './specifications.routes';

import '../shared/container';

const rentalxRoutes = Router();

rentalxRoutes.use('/specifications', specificationRouter);
rentalxRoutes.use('/categories', categoriesRouter);

export { rentalxRoutes };