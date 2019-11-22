const router = require('express').Router();
const skillsDb = require('../model/skills');

router.get('/', (req, res) => {
    filter = req.body
    skillsDb.getMany(filter)
        .then(skills => {
            res.status(200).json(skills);
        })
        .catch(err => res.send(err));
});

router.post('/', (req, res) => {
    payload = req.body
    skillsDb.insert(payload)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err.message));
})

router.put('/', (req, res) => {
    skillsDb.update({id: req.body.id}, req.body.payload)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err));
})

router.delete('/', (req, res) => {
    skillsDb.remove(req.body)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err));
})

module.exports = router;