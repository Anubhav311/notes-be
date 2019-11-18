const db = require('../data/dbConfig');

module.exports = {
    getMany
}

function getMany(filter = {}) {
    return db('items').where(filter)
}