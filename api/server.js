const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const itemsRouter = require('../router/items');

server.use(helmet());
server.use(cors());
server.use(express.json())

server.use('/api/items', itemsRouter);

server.get('/', (req, res) => {
    res.status(200).json("it's working")
})

module.exports = server;