const db = require('../data/dbConfig');

module.exports = {
    insert,
    getMany,
    update,
    remove
}

function insert(user) {
    return db('skills')
        .insert(user)
        .returning('id')
        .then(idArr => {
            const id = idArr[0]
            return db('skills')
                .where({id}).first();
        })
}

function getMany(filter = {}) {
    return db('skills').where(filter)
}

function update(filter = {}, payload) {
    return db('skills')
        .where(filter)
        .update(payload)
        .returning('id')
        .then(idArr => {
            const id = idArr[0]
            return db('skills')
                .where({id})
                .first();
        })
}

function remove(filter = null) {
    if (!filter) return new Error('No selector provided for deletion');
    return db('skills')
        .where(filter)
        .delete()
        .returning('id');
}