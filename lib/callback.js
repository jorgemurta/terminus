var callbacks = {}

module.exports = {
    add(channel, callback) {
        if (callbacks.hasOwnProperty(channel)) {
            callbacks[channel].push(callback)
            return
        }

        callbacks[channel] = []
        return this.add(channel, callback)
    },

    execute(channel, payload, client) {
        if (callbacks.hasOwnProperty(channel)) {
            callbacks[channel].forEach((callback) => {
                callback(payload, client)
            })
        }
    }
}
