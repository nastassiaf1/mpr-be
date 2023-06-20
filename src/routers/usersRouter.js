import express from 'express';
import UserController from '../controllers/userController.js';

const usersRouter = express.Router();

usersRouter.get('/users/:userId', UserController.getUser)

export default usersRouter;
