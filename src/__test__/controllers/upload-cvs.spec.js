const makeUploadCvs = require('../../controllers/upoad-cvs')

describe('Upload CVS Controller', () => {
  it('should call UC with the right data', async () => {
    const result = 'Ok'
    const uploadCVSUC = jest.fn(() => result)

    const req = { file: { path: 'public/newFile' }, body: { provider: 'Juan' } }
    const sendBuilder = { send: jest.fn() }
    const res = { status: jest.fn(() => sendBuilder) }

    const uploadCvsCtrl = makeUploadCvs({ useCases: { uploadCVSUC } })

    await uploadCvsCtrl(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(sendBuilder.send).toHaveBeenCalledWith('Ok')
  })

  it('should return an error status code', async () => {
    const result = 'Ok'
    const uploadCVSUC = jest.fn(() => {
      throw new Error('something went wrong')
    })

    const req = { file: { path: 'public/newFile' }, body: { provider: 'Juan' } }
    const sendBuilder = { send: jest.fn() }
    const res = { status: jest.fn(() => sendBuilder) }

    const uploadCvsCtrl = makeUploadCvs({ useCases: { uploadCVSUC } })

    await uploadCvsCtrl(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(sendBuilder.send).toHaveBeenCalledWith('something went wrong')
  })
})
