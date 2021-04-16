const makeUploadCVS = require('./upoad-cvs')

const { uploadCVSUC } = require('../usecases')

const uploadCVSCtrl = makeUploadCVS({ useCases: { uploadCVSUC } })

module.exports = Object.freeze({ uploadCVSCtrl })
