const { DataTypes } = require('sequelize');
const sequelize = require('../connect');

const TodoLists = sequelize.define('TodoLists', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    }
  });

  module.exports = TodoLists;