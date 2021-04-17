const path = '.env'
require('dotenv').config({ path })

const port = process.env.PORT || 5001

const app = require('./app')

app.listen(port, () => {
  console.log(`Server is listening in port: ${port}`)
})
