import dbConfig from '../../configs/database.js';
import { NODE_ENV } from '../../const/env.js';

const env = process.env.NODE_ENV || NODE_ENV.DEV;

export default {
  [env]: {
        name: dbConfig.name,
        password: dbConfig.password,
        user: dbConfig.user,
        host: dbConfig.host,
        port: dbConfig.port,
        dialect: 'postgres'
      }
};
