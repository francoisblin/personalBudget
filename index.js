const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001
const HOST = '0.0.0.0'

// Add middleware for handling CORS requests from index.html

app.use(cors())
// Add middware for parsing request bodies here:

app.use(bodyParser.json())
// Mount your existing apiRouter below at the '/api' path.
// const apiRouter = require('./server/api')
// app.use('/api', apiRouter)

// This conditional is here for testing purposes:
if (!module.parent) {
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, HOST, () => {
    console.log(`Server listening on port ${PORT}`)
  })
}

app.get('/', function (req, res) {
  res.send('hello world')
})