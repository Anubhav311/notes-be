const server = require('express')();

server.get('/', (req, res) => {
    res.status(200).json("it's working")
})

const port = 4000;
server.listen(port, () => console.log(`\nAPI running on port: ${port}\n`));