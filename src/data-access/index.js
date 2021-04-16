// TODO intall and config Mongo DB
const mongoDbClient = 'TODO'

const makeMongoDb = require('./mongo-db')

const mongoDb = makeMongoDb({ databases: { mongoDbClient } })

module.exports = Object.freeze({ mongoDb })
