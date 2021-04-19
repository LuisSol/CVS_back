const makeParseDocEntity = require('../../entities/parse-file')
const { pick } = require('lodash')
const parsedDoc = require('../mocks/parsed-doc')
const parsedDocFew = require('../mocks/parsed-doc-few-prop')
const completeRequiredRows = require('../../configuration/required-columns')

describe('parse file entity', () => {
  it('Should parse a file stream', async () => {
    const fakeFileStream = 'fakestreamdata12334567890'
    const fs = { readFileSync: jest.fn(() => fakeFileStream) }
    const parseCVS = jest.fn(() => parsedDoc)
    const file = 'public/fake.csv'

    const parseDoc = makeParseDocEntity({ utils: { parseCVS, fs, pick }, configuration: { requiredRows: completeRequiredRows } })

    const res = await parseDoc(file)

    expect(fs.readFileSync).toHaveBeenCalledWith(file)
    expect(parseCVS).toHaveBeenCalledWith(fakeFileStream, { columns: true, trim: true })
    expect(res).toEqual(parsedDoc)
  })
  it('Should return less columns from the document', async () => {
    const fakeFileStream = 'fakestreamdata12334567890'
    const fs = { readFileSync: jest.fn(() => fakeFileStream) }
    const parseCVS = jest.fn(() => parsedDoc)
    const file = 'public/fake.csv'
    const requiredRows = ['UUID', 'VIN', 'Make', 'Model', 'Mileage']

    const parseDoc = makeParseDocEntity({ utils: { parseCVS, fs, pick }, configuration: { requiredRows } })

    const res = await parseDoc(file)

    expect(fs.readFileSync).toHaveBeenCalledWith(file)
    expect(parseCVS).toHaveBeenCalledWith(fakeFileStream, { columns: true, trim: true })
    expect(res).toEqual(parsedDocFew)
  })
})
