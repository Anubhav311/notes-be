const router = require('express').Router();
const usersDb = require('../model/users');

router.get('/', (req, res) => {
    usersDb.getMany()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.send(err));
});

module.exports = router;