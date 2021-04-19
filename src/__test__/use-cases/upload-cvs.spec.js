const makeUploadCSV = require('../../usecases/upload-cvs')
const parsedFile = require('../mocks/parsed-doc')

describe('getProvidersUC', () => {
  it('should call data access with the right data', async () => {
    const mongoDb = {
      saveCVS: jest.fn(),
    }
    const parseFile = jest.fn(() => parsedFile)
    const file = 'public/file.csv'
    const provider = 'fakeprovider'

    const uploadCSVUC = makeUploadCSV({ dataAccess: { mongoDb }, entities: { parseFile } })
    await uploadCSVUC(file, provider)

    expect(parseFile).toHaveBeenCalledWith(file)
    expect(mongoDb.saveCVS).toHaveBeenCalledWith(parsedFile, provider)
  })
})
