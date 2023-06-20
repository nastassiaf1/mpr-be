import { NODE_ENV } from "./../const/env.js"

export default {
  [NODE_ENV.DEV]: {
    username: 'postgres',
    password: 'postgres',
    database: 'mpr-db',
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
  },
  [NODE_ENV.PROD]: {
    username: 'postgres',
    password: 'postgres',
    database: 'mpr-db-prod',
    host: 'localhost',
    dialect: 'postgres'
  }
}
