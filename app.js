import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { config } from './src/configs/config.js'
import router from './src/routers/index.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}`);
})
