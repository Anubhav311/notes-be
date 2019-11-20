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

module.exports = router;