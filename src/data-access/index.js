const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoDbClient = require('mongoose')
const initializeSchema = require('../configuration/Schema')

const mongoServer = new MongoMemoryServer()

const initializeMoongose = async () => {
  const uri = await mongoServer.getUri()
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  mongoDbClient.connect(uri, mongooseOpts)

  mongoDbClient.connection.on('error', e => {
    if (e.message.code === 'ETIMEDOUT') {
      console.log(e)
      mongoDbClient.connect(uri, mongooseOpts)
    }
    console.log(e)
  })

  mongoDbClient.connection.on('open', () => {
    console.log(`MongoDB successfully connected to ${uri}`)
  })
}

initializeMoongose()
const models = initializeSchema(mongoDbClient)

const makeMongoDb = require('./mongo-db')

const mongoDb = makeMongoDb({ databases: { mongoDbClient, models } })

module.exports = Object.freeze({ mongoDb })
