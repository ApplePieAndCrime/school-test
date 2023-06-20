const Sequelize = require('sequelize');

const envConfigs = require('./config/config');

const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];

const { database, user, password, host, ...rest } = config;

let sequelize = new Sequelize(database, user, password, {
  host,
  port: 5432,
  dialect: 'postgres',
  ...rest,
});

module.exports = sequelize;
