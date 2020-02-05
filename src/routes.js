import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Gabriel Jayme',
    email: 'gabrielj_89@hotmail.com',
    password_hash: '123465484',
  });

  return res.json(user);
});

export default routes;
