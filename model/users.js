const db = require('../data/dbConfig');

module.exports = {
    getMany
}

function getMany(filter = {}) {
    return db('users').where(filter)
}