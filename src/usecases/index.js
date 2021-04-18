const { mongoDb } = require('../data-access')
const { parseFile } = require('../entities')

const makeUploadCVSUC = require('./upload-cvs')

const uploadCVSUC = makeUploadCVSUC({ dataAccess: { mongoDb }, entities: { parseFile } })

module.exports = Object.freeze({
  uploadCVSUC,
})
