const server = require('./lib/server')
const express = require('express')
const app = express()

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

function startWeb() {
    app.listen(3000, function () {
      console.log('Example app listening on port 3000!')
    })
}
