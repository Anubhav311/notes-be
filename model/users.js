const db = require('../data/dbConfig');

module.exports = {
    insert,
    getOne,
    getMany,
    update,
    remove
}

function insert(user) {
    return db('users')
        .insert(user)
        .returning('id')
        .then(idArr => {
            const id = idArr[0]
            return db('users')
                .where({id}).first();
        })
}

function getOne(filter = {}) {
    return db('users').where(filter).first();
}

function getMany(filter = {}) {
    return db('users').where(filter)
}

function update(filter = {}, payload) {
    return db('users')
        .where(filter)
        .update(payload)
        .returning('id')
        .then(idArr => {
            const id = idArr[0]
            return db('users')
                .where({id})
                .first();
        })
}

function remove(filter = null) {
    if (!filter) return new Error('No selector provided for deletion');
    return db('users')
        .where(filter)
        .delete()
        .returning('id');
}