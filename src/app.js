const express = require('express')
const cors = require('cors')

const app = express()

const { uploadCVSCtrl } = require('./controllers')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/healt', (_, res) => {
  res.send('helthy... :)')
})

app.post('/upload-cvs', uploadCVSCtrl)

module.exports = app
