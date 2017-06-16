const mosca = require('mosca')
const callbacks = require('../callbacks')

var server = null

module.exports = {
    create(settings) {
        server = new mosca.Server(settings)

        server.on('clientConnected', function(client) {
            console.log('client connected', client.id)
        })

        server.on('published', function(packet, client) {
            callbacks.execute(packet.topic, packet.payload, client)
        })
    },

    ready(callback) {
        server.on('ready', callback)
    }
}
