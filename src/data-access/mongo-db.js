module.exports = ({ databases: { mongoDbClient } }) => {
  async function saveCVS(parsedCVS, provider) {
    try {
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
