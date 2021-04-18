const makeUploadCVS = require('./upoad-cvs')
const makeGetProviders = require('./get-providers')
const makeGetProviderVehicles = require('./get-vehicles')

const { uploadCVSUC, getProvidersUC, getProviderVehiclesUC } = require('../usecases')

const uploadCVSCtrl = makeUploadCVS({ useCases: { uploadCVSUC } })
const getProvidersCtrl = makeGetProviders({ useCases: { getProvidersUC } })
const getProviderVehiclesCtrl = makeGetProviderVehicles({ useCases: { getProviderVehiclesUC } })

module.exports = Object.freeze({ uploadCVSCtrl, getProvidersCtrl, getProviderVehiclesCtrl })
