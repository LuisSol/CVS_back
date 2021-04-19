const makeGetProviders = require('../../usecases/get-providers')

describe('getProvidersUC', () => {
  it('should call data access with the right data', () => {
    const mongoDb = {
      getProviders: jest.fn(),
    }

    const getProvidersUC = makeGetProviders({ dataAccess: { mongoDb } })
    getProvidersUC()
    expect(mongoDb.getProviders).toHaveBeenCalled()
  })
})
