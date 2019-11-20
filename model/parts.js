const db = require('../data/dbConfig');

module.exports = {
    insert,
    getMany
}

function insert(user) {
    return db('skill_parts')
        .insert(user)
        .returning('id')
        .then(idArr => {
            const id = idArr[0]
            return db('skill_parts')
                .where({id}).first();
        })
}

function getMany(filter = {}) {
    return db('skill_parts').where(filter)
}