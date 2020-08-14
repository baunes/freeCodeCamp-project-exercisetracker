const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Database = require('./database')

const app = express()

// Basic Configuration
const port = process.env.PORT || 3000

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

// Not found middleware
app.use((req, res, next) => {
  return next({ status: 404, message: 'not found' })
})

// Error Handling middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  let errCode
  let errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt').send(errMessage)
})

new Database(process.env.MONGO_URI)
  .connect()
  .then(() => {
    console.log('Connected to Mongo')
  })
  .then(() => {
    const listener = app.listen(port, () => {
      console.log(`Your app is listening on port ${listener.address().port}`)
    })
  })
