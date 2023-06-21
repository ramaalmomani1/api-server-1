// containing the schema for the clothes table
'use strict'

const clothes = (sequelize, DataTypes) => sequelize.define('Clothes', {
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.STRING
  },
  FabricName: {
    type: DataTypes.STRING
  },
  stretchability:{
    type: DataTypes.STRING //Medium
  }
})

module.exports = clothes;

/* this code defines a Sequelize model for the 'Clothes' table with specific column definitions. 
It allows for managing and interacting with clothes-related data in a database using Sequelize.*/