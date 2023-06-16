import express from 'express';
import router from './routers/index.js'
import config from './config.js';

const app = express();

app.use(express.json());
app.use('/', router)

app.listen(config.app.port, () => {
    console.log(`App listening on port ${port}`);
})
