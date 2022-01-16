import express from 'express';
import { rentalxRoutes } from './routes';
const app = express();

app.listen(3333, () => {
    console.log('Server is running on port 3333');
});

app.use(express.json());

app.use(rentalxRoutes);