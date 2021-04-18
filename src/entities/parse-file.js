module.exports = ({ utils: { parseCVS, fs, pick }, configuration: { requiredRows } }) =>
  async function parseFile(file) {
    const fileData = fs.readFileSync(file)
    const parsedCVS = await parseCVS(fileData, { columns: true, trim: true })

    return parsedCVS.map(row => pick(row, requiredRows))
  }
