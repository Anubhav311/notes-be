const router = require('express').Router();
const usersDb = require('../model/users');
const bcrypt = require('bcryptjs');

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

router.post('/', (req, res) => {
    user = req.body

    const hash = bcrypt.hashSync(user.password, 3)

    user.password = hash

    usersDb.insert(user)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err.message));
})

router.put('/', (req, res) => {
    usersDb.update({id: req.body.id}, req.body.payload)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err));
})

router.delete('/', (req, res) => {
    usersDb.remove(req.body)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err));
})

module.exports = router;