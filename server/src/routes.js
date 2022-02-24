import { Router } from 'express';
import RouteController from './controllers/RouteController';

const routes = Router();
routes.post('/routes', RouteController.store);
routes.get('/routes', (_req, res) => res.status(200).json({
  message: 'Hello world',
}));

export default routes;
