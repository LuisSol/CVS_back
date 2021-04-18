module.exports = ({ databases: { mongoDbClient } }) => {
  async function saveCVS(parsedCVS, provider) {
    try {
      console.log(parsedCVS)
      console.log(provider)
      // TODO save to mongoDb
      return 'OK'
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  return Object.freeze({
    saveCVS,
  })
}
