import express from 'express';
import usersRouter from './usersRouter.js';
import postRouter from './postsRouter.js';

const router = express.Router();

router.use(usersRouter);
router.use(postRouter);

export default router;
