module.exports = ({ useCases: { getProviderVehiclesUC } }) =>
  async function getProviderVehicles({ params }, res) {
    try {
      const { id } = params
      const vehicles = await getProviderVehiclesUC(id)
      return res.status(200).send(vehicles)
    } catch (error) {
      console.log(error)
      return res.status(500).send(error.message)
    }
  }
