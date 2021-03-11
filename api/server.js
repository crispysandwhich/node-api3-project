const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const server = express();

const UserRouter = require('./users/users-router.js')


// remember express by default cannot parse JSON in request bodies
server.use(cors())
server.use(express.json())
server.use(morgan('dev'))
// global middlewares and the user's router need to be connected here

server.use("/api/users", UserRouter)


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
