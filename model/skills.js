const db = require('../data/dbConfig');

module.exports = {
    insert,
    getMany,
    update
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
    console.log(filter, payload)
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
