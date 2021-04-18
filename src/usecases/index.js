const { mongoDb } = require('../data-access')
const { parseFile } = require('../entities')

const makeUploadCVSUC = require('./upload-cvs')
const makeGetProvidersUC = require('./get-providers')

const uploadCVSUC = makeUploadCVSUC({ dataAccess: { mongoDb }, entities: { parseFile } })
const getProvidersUC = makeGetProvidersUC({ dataAccess: { mongoDb } })

module.exports = Object.freeze({
  uploadCVSUC,
  getProvidersUC,
})
