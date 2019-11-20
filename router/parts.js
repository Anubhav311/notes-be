const router = require('express').Router();
const partsDb = require('../model/parts');

router.get('/', (req, res) => {
    console.log(req.body)
    filter = req.body
    partsDb.getMany(filter)
        .then(parts => {
            res.status(200).json(parts);
        })
        .catch(err => res.send(err));
});

module.exports = router;