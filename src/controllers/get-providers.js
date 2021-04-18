module.exports = ({ useCases: { getProvidersUC } }) =>
  async function getProviders(_, res) {
    try {
      const providers = await getProvidersUC()
      return res.status(200).send(providers)
    } catch (error) {
      console.log(error)
      return res.status(500).send(error.message)
    }
  }
