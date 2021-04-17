module.exports = ({ useCases: { uploadCVSUC } }) =>
  async function uploadCvsFile(req, res) {
    try {
      // TODO parse req to obtain file and provider
      uploadCVSUC()
      return res.status(200).send('Ok')
    } catch (error) {
      console.log(error)
      return res.status(500).send(error.message)
    }
  }
