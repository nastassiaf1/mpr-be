import { Sequelize } from 'sequelize';
import dbConfig from '../configs/database.js';

const sequelize = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: 'postgres'
});

export default sequelize;
