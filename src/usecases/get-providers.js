module.exports = ({ dataAccess: { mongoDb } }) =>
  async function getProvidersUC() {
    return mongoDb.getProviders()
  }
