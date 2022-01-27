import express from 'express';
import swaggerUi from 'swagger-ui-express';
import 'express-async-errors';
import './database';
import swaggerFile from '../src/swaager.json';

import { rentalxRoutes } from './routes';
import err from './middlewares/err';

const app = express();

app.use(express.json());

app.use(rentalxRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(err);

app.listen(3333, () => {
    console.log('Server is running on port 3333');
});