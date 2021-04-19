const makeMongoDb = require('../../data-access/mongo-db')
const providers = require('../mocks/providers')
const vehicles = require('../mocks/vehicles')

describe('MongoDb data access', () => {
  describe('getProviders method', () => {
    it('should return all providers', async () => {
      const models = {
        Provider: {
          find: jest.fn(() => providers),
        },
      }

      const { getProviders } = makeMongoDb({ databases: { models } })

      const res = await getProviders()

      expect(models.Provider.find).toHaveBeenCalledWith({})
      expect(res).toEqual(providers)
    })
  })
  describe('getProviderVehicles method', () => {
    it('should return all vehicles of a given provider id', async () => {
      const models = {
        Vehicle: {
          find: jest.fn(() => vehicles),
        },
      }

      const id = '607c9f569d095137aa80c7ba'

      const { getProviderVehicles } = makeMongoDb({ databases: { models } })

      const res = await getProviderVehicles(id)

      expect(models.Vehicle.find).toHaveBeenCalledWith({ provider: id })
      expect(res).toEqual(vehicles)
    })
  })
})
