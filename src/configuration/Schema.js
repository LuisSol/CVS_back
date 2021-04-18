module.exports = mongoose => {
  const providerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    vehicles: [{ type: mongoose.Types.ObjectId, ref: 'Vehicle' }],
  })
  const vehicleSchema = new mongoose.Schema({
    UUID: String,
    VIN: String,
    Make: String,
    Model: String,
    Mileage: String,
    Year: String,
    Price: String,
    'Zip Code': String,
    'Create Date': { type: Date, default: Date.now },
    'Update Date': { type: Date, default: Date.now },
    provider: { type: mongoose.Types.ObjectId, ref: 'Provider' },
  })

  const Provider = mongoose.model('Provider', providerSchema)
  const Vehicle = mongoose.model('Vehicle', vehicleSchema)

  return Object.freeze({ Provider, Vehicle })
}
