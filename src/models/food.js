// containing the schema for the food table

'use strict'

const food = (sequelize,DataTypes)=> sequelize.define('FOOD', {
    flavour:{
     type: DataTypes.STRING
    },
color: {
    type:  DataTypes.STRING
}
});

module.exports = food;

/*this code defines a Sequelize model for the 'FOOD' table with specific column definitions.
 It allows for managing and interacting with food-related data in a database using Sequelize.*/
