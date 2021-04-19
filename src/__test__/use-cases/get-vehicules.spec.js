const makeGetVehicles = require('../../usecases/get-vehicles')

describe('getProvidersUC', () => {
  it('should call data access with the right data', () => {
    const mongoDb = {
      getProviderVehicles: jest.fn(),
    }
    const id = 'fakeId'

    const getProviderVehiclesUC = makeGetVehicles({ dataAccess: { mongoDb } })
    getProviderVehiclesUC(id)
    expect(mongoDb.getProviderVehicles).toHaveBeenCalledWith(id)
  })
})
