module.exports = ({ databases: { models } }) => {
  async function saveCVS(parsedCVS, provider) {
    try {
      const providerToStore = provider.trim().toUpperCase()

      const resProvider = await models.Provider.findOne({ name: providerToStore })
      console.log(resProvider)

      if (resProvider) {
        for await (vehicle of parsedCVS) {
          const newVehicle = new models.Vehicle({
            ...vehicle,
            'Create Date': vehicle['Create Date'] ? new Date(vehicle['Create Date']) : new Date(),
            'Update Date': vehicle['Update Date'] ? new Date(vehicle['Update Date']) : new Date(),
          })
          await newVehicle.save()
          console.log(`New vechicle saved ${newVehicle._id}`)
          resProvider.vehicles.push(newVehicle._id)
        }
        await resProvider.updateOne({ vehicles: resProvider.vehicles })
        console.log(`Provider ${resProvider._id} updated`)
      } else {
        const newProvider = new models.Provider({ name: providerToStore })
        for await (vehicle of parsedCVS) {
          const newVehicle = new models.Vehicle({
            ...vehicle,
            'Create Date': vehicle['Create Date'] ? new Date(vehicle['Create Date']) : new Date(),
            'Update Date': vehicle['Update Date'] ? new Date(vehicle['Update Date']) : new Date(),
          })
          await newVehicle.save()
          console.log(`New vechicle saved ${newVehicle._id}`)
          newProvider.vehicles.push(newVehicle._id)
        }
        await newProvider.save()
        console.log(`New provider saved ${newProvider._id}`)
      }

      return 'Upload successful'
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  return Object.freeze({
    saveCVS,
  })
}
