const makeGetVehicles = require('../../controllers/get-vehicles')
const vehicles = require('../mocks/vehicles')

describe('Get vehicles from a provider id Controller', () => {
  it('should call UC with the right data', async () => {
    const getProviderVehiclesUC = jest.fn(() => vehicles)

    const req = { params: { id: 'fakeId' } }
    const sendBuilder = { send: jest.fn() }
    const res = { status: jest.fn(() => sendBuilder) }

    const getVehiclesCtrl = makeGetVehicles({ useCases: { getProviderVehiclesUC } })

    await getVehiclesCtrl(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(sendBuilder.send).toHaveBeenCalledWith(vehicles)
  })

  it('should return an error status code', async () => {
    const getProviderVehiclesUC = jest.fn(() => {
      throw new Error('something went wrong')
    })

    const req = { params: { id: 'fakeId' } }
    const sendBuilder = { send: jest.fn() }
    const res = { status: jest.fn(() => sendBuilder) }

    const getVehiclesCtrl = makeGetVehicles({ useCases: { getProviderVehiclesUC } })

    await getVehiclesCtrl(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(sendBuilder.send).toHaveBeenCalledWith('something went wrong')
  })
})
