const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('hi')
    res.status(200).json("items endpoint is working");
});

module.exports = router;