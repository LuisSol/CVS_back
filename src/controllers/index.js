const makeUploadCVS = require('./upoad-cvs')
const makeGetProviders = require('./get-providers')

const { uploadCVSUC, getProvidersUC } = require('../usecases')

const uploadCVSCtrl = makeUploadCVS({ useCases: { uploadCVSUC } })
const getProvidersCtrl = makeGetProviders({ useCases: { getProvidersUC } })

module.exports = Object.freeze({ uploadCVSCtrl, getProvidersCtrl })
