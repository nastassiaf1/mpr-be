import { Sequelize } from 'sequelize';
import { NODE_ENV } from '../const/env.js';
import dbConfig from '../configs/database.js';

const ENV = process.env.NODE_ENV || NODE_ENV.DEV;
const config = dbConfig[ENV];

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    port: config.port,
    dialect: 'postgres',
});

export default sequelize;
