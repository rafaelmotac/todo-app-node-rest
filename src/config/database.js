const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_rest', 'root', '12345678dd', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
