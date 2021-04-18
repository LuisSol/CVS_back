module.exports = ({ dataAccess: { mongoDb } }) =>
  async function getProviderVehiclesUC(id) {
    return mongoDb.getProviderVehicles(id)
  }
