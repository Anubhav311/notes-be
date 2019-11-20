const router = require('express').Router();
const usersDb = require('../model/users');

router.get('/login', (req, res) => {
    usersDb.getOne()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => res.send(err));
})

router.get('/', (req, res) => {
    usersDb.getMany()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.send(err));
});

module.exports = router;