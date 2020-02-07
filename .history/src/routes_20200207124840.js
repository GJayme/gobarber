import { Router } from 'express';

import UserController from './app/controllers/UserController';
import Sess from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', UserController.store);

export default routes;
