'ues strict'

require('dotenv').config();

const { db } = require('./src/models');
const {start} = require('./src/server')
const PORT = process.env.PORT || 8000
console.log(process.env.NODE_ENV)

db.sync().then( () =>{
 start(PORT)
}).catch(error => console.log(error))


/* This code sets up environment variables using dotenv, imports the database connection or module, 
and starts the server on a specified port after synchronizing the database models. 
The code also logs the current environment value and any errors that occur during the process.*/