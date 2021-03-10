const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const server = express();

// remember express by default cannot parse JSON in request bodies
server.use(express.json())
server.use(morgan('dev'))
server.use(cors())
// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
