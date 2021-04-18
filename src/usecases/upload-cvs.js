module.exports = ({ dataAccess: { mongoDb }, entities: { parseFile } }) =>
  async function uploadCVSUC(file, provider) {
    const parsedFile = await parseFile(file)
    return mongoDb.saveCVS(parsedFile, provider)
  }
