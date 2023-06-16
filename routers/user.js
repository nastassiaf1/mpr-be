import express from 'express';

const userRouter = express.Router();

userRouter.get('/user/:userId', (req, res) => {
    res.send(req.params);
})

export default userRouter;
