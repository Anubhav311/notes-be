const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const usersRouter = require('../router/users');
const skillsRouter = require('../router/skills');
const partsRouter = require('../router/parts');

server.use(helmet());
server.use(cors());
server.use(express.json())

server.use('/api/users', usersRouter);
server.use('/api/skills', skillsRouter);
server.use('/api/parts', partsRouter);

server.get('/', (req, res) => {
    res.status(200).json("it's working")
})

module.exports = server;