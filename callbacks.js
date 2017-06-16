var callbacks = require('./lib/callback')

callbacks.add('mqtt/test', (payload, client) => {
    console.log('Hey')
})

callbacks.add('mqtt/test2', (payload, client) => {
    console.log("Hello second handler")
})

module.exports = callbacks
