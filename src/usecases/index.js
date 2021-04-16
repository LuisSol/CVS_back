const { mongoDb } = require('../data-access')

const makeUploadCVSUC = require('./upload-cvs')

const uploadCVSUC = makeUploadCVSUC({ dataAccess: { mongoDb } })

module.exports = Object.freeze({
  uploadCVSUC,
})
