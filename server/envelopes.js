const express = require('express')
const envelopesRouter = express.Router()
module.exports = envelopesRouter
const { envelopesArray } = require('./db')

envelopesRouter.get('/', (req, res, next) => {
  return res.send(envelopesArray)
})

envelopesRouter.post('/', (req, res, next) => {
  return res.status(201).send()
})
