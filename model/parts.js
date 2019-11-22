const db = require('../data/dbConfig');

module.exports = {
    insert,
    getMany,
    update,
    remove
}

function insert(user) {
    return db('parts')
        .insert(user)
        .returning('id')
        .then(idArr => {
            const id = idArr[0]
            return db('parts')
                .where({id}).first();
        })
}

function getMany(filter = {}) {
    return db('parts').where(filter)
}

function update(filter = {}, payload) {
    return db('parts')
        .where(filter)
        .update(payload)
        .returning('id')
        .then(idArr => {
            const id = idArr[0]
            return db('parts')
                .where({id})
                .first();
        })
}

function remove(filter = null) {
    if (!filter) return new Error('No selector provided for deletion');
    return db('parts')
        .where(filter)
        .delete()
        .returning('id');
}