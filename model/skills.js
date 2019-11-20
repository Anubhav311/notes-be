const db = require('../data/dbConfig');

module.exports = {
    insert,
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

function getMany(filter = {user_id: 1}) {
    return db('skills').where(filter)
}