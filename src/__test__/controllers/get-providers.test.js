const makeGetProviders = require('../../controllers/get-providers')
const providers = require('../mocks/providers')

describe('Get Providers Controller', () => {
  it('should call UC with the right data', async () => {
    const getProvidersUC = jest.fn(() => providers)

    const req = {}
    const sendBuilder = { send: jest.fn() }
    const res = { status: jest.fn(() => sendBuilder) }

    const getProvidersCtrl = makeGetProviders({ useCases: { getProvidersUC } })

    await getProvidersCtrl(req, res)

    expect(getProvidersUC).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(200)
    expect(sendBuilder.send).toHaveBeenCalledWith(providers)
  })

  it('should return an error status code', async () => {
    const getProvidersUC = jest.fn(() => {
      throw new Error('something went wrong')
    })

    const req = {}
    const sendBuilder = { send: jest.fn() }
    const res = { status: jest.fn(() => sendBuilder) }

    const getProvidersCtrl = makeGetProviders({ useCases: { getProvidersUC } })

    await getProvidersCtrl(req, res)

    expect(getProvidersUC).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(500)
    expect(sendBuilder.send).toHaveBeenCalledWith('something went wrong')
  })
})
