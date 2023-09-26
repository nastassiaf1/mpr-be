import express from 'express';
import PostController from '../controllers/postController.js';

const postRouter = express.Router();

postRouter.get('/posts', PostController.getPosts);

export default postRouter;
