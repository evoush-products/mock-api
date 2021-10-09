const jsonServer = require('json-server')
const server = jsonServer.create()
const dotenv = require('dotenv').config()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 7000;

server.use(middlewares)
server.use(router)

server.listen(port)