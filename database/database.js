const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('kea', "postgres", "", {
  host: "localhost",
  dialect: 'postgres'
});

module.exports = sequelize;