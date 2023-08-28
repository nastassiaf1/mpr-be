import express from 'express';
import UserController from '../controllers/userController.js';

const usersRouter = express.Router();

usersRouter.get('/users/:userId', UserController.getUser);
usersRouter.post('/users/register', UserController.addUser)
usersRouter.post('/users/login', UserController.login)

export default usersRouter;
