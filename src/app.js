const express = require('express')
const cors = require('cors')
const multer = require('multer')

let upload = multer({ dest: 'public/' })

const app = express()

const { uploadCVSCtrl } = require('./controllers')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/healt', (_, res) => {
  res.send('helthy... :)')
})

app.post('/upload-cvs', upload.single('file'), uploadCVSCtrl)

module.exports = app
