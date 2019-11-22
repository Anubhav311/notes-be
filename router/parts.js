const router = require('express').Router();
const partsDb = require('../model/parts');

router.get('/', (req, res) => {
    filter = req.body
    partsDb.getMany(filter)
        .then(parts => {
            res.status(200).json(parts);
        })
        .catch(err => res.send(err));
});

router.put('/', (req, res) => {
    console.log(req.body)
    partsDb.update({id: req.body.id}, req.body.payload)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => console.log(err.message));
})

module.exports = router;