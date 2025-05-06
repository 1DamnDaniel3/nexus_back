import { Sequelize } from 'sequelize';
import {default as config} from './config/database.js'

export const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: false
});

