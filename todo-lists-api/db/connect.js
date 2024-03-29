const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo-list-db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;