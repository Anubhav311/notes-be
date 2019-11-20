const db = require('../data/dbConfig');

module.exports = {
    getMany
}

function getMany(filter = {}) {
    return db('skills').where(filter)
}