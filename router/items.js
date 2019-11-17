const router = require('express').Router();
const itemsDb = require('../model/items');

router.get('/', (req, res) => {
    res.status(200).send(itemsDb.getMany());
});

module.exports = router;