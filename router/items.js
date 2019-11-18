const router = require('express').Router();
const itemsDb = require('../model/items');

router.get('/', (req, res) => {
    itemsDb.getMany()
        .then(items => {
            res.status(200).json(items);
        })
        .catch(err => res.send(err));
});

module.exports = router;