module.exports = ({ useCases: { uploadCVSUC } }) =>
  async function uploadCvsFile({ file, body: { provider } }, res) {
    try {
      const { path: filePath } = file
      const result = await uploadCVSUC(filePath, provider)
      return res.status(200).send(result)
    } catch (error) {
      console.log(error)
      return res.status(500).send(error.message)
    }
  }
