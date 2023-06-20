import express from 'express';
import { config } from './src/configs/config.js'
import router from './src/routers/index.js';

const app = express();

app.use(express.json());
app.use('/', router)

app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}`);
})
