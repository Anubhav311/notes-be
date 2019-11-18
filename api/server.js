const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const itemsRouter = require('../router/items');
const commentsRouter = require('../router/comments');

server.use(helmet());
server.use(cors());
server.use(express.json())

server.use('/api/items', itemsRouter);
server.use('/api/comments', commentsRouter);

server.get('/', (req, res) => {
    res.status(200).json("it's working")
})

module.exports = server;