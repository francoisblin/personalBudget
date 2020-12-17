const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app

const PORT = process.env.PORT || 4001
const HOST = '0.0.0.0'

// Add middleware for handling CORS requests from index.html

app.use(cors())
// Add middware for parsing request bodies here:

app.use(bodyParser.json())

// Mount your existing apiRouter below at the '/' path.
const apiRouter = require('./server/api')
app.use('/', apiRouter)

// This conditional is here for testing purposes:
if (!module.parent) {
  app.listen(PORT, HOST, () => {
    console.log(`Server listening on port ${PORT}`)
  })
}
