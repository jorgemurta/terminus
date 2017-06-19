const server = require('./lib/server')
const express = require('express')
const app = express()
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer)

const settings = {
  port: 1883,
  json: true,
  backend: {
      type: 'memory'
  }
}

server.create(settings)

server.ready(() => {
    console.log('Mosca server is up and running')
    startWeb()
})

app.use(require('./web/controllers'))
app.set('view engine', 'pug')
app.set('views', './web/views')

function startWeb() {
    httpServer.listen(3000)
}
