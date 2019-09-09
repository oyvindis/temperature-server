import { Router } from 'express';
import { TemperatureController } from '../controllers/TemperatureController';

export const temperatureRoutes = Router();

temperatureRoutes.get('/getFromDb', [], TemperatureController.getTemperatureFromDb);

temperatureRoutes.get('/:id([0-9]+)', TemperatureController.getOneById);

temperatureRoutes.get('/', [], TemperatureController.listAll);
