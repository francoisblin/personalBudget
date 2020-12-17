const express = require('express')
const envelopesRouter = express.Router()

module.exports = envelopesRouter

const {
  envelopesArray,
  addEnvelope
} = require('./db')

envelopesRouter.get('/', (req, res, next) => {
  return res.send(envelopesArray)
})

envelopesRouter.post('/', (req, res, next) => {
  const envelope = req.query
  console.log(req.query.name)
  const newEnvelope = addEnvelope(envelope)
  return res.status(201).send(newEnvelope)
})
