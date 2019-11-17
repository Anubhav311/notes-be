const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json("it's working")
})

module.exports = server;