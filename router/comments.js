const router = require('express').Router();
const commentsDb = require('../model/items');

router.get('/', (req, res) => {
    commentsDb.getMany()
        .then(comments => {
            res.status(200).json(comments);
        })
        .catch(err => res.send(err));
});

module.exports = router;