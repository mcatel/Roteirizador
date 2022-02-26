import { Router } from 'express';
import RouteController from './controllers/RouteController';

const routes = Router();
routes.post('/routes', RouteController.store);
routes.get('/routes', RouteController.search);

export default routes;
