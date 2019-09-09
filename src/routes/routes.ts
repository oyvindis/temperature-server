import { Router } from 'express';
import { temperatureRoutes } from './temperatureRoutes';

export const routes = Router();

routes.use('/temperature', temperatureRoutes);
