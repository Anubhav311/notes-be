const db = require('../data/dbConfig');

module.exports = {
    insert,
    getOne,
    getMany
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

function getOne(filter = {}) {
    return db('skills').where(filter).first();
}

function getMany(filter = {}) {
    return db('skills').where(filter)
}