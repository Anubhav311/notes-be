require('dotenv').config()
const knex = require('knex');
const config = require('../knexfile');


const database = knex(config[process.env.DB_ENV])

module.exports = database;