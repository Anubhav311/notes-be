const db = require('../data/dbConfig');

module.exports = {
    getOne,
    getMany
}

function getMany(filter = {}) {
    return db('users').where(filter)
}

function getOne(filter = {}) {
    return db('users').where(filter).first()
}