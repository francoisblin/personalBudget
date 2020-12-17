const express = require('express')
const envelopesRouter = express.Router()

module.exports = envelopesRouter

const {
  envelopesArray,
  addEnvelope,
  getEnvelopeById,
  updateBudget,
  deleteEnvelope
} = require('./db')

envelopesRouter.param('envelopeId', (req, res, next, id) => {
  const envelope = getEnvelopeById(id)
  if (!envelope) {
    res.status(404).send()
  } else {
    req.envelope = envelope
    next()
  }
})

envelopesRouter.get('/', (req, res, next) => {
  return res.send(envelopesArray)
})

envelopesRouter.post('/', (req, res, next) => {
  const envelope = req.query
  const newEnvelope = addEnvelope(envelope)
  return res.status(201).send(newEnvelope)
})

envelopesRouter.get('/:envelopeId', (req, res, next) => {
  res.send(req.envelope)
})

envelopesRouter.post('/:envelopeId', (req, res, next) => {
  const updateEnvelope = updateBudget(req.envelope, req.query)
  console.log(updateEnvelope)
  res.send(updateEnvelope)
})

envelopesRouter.delete('/:envelopeId', (req, res, next) => {
  deleteEnvelope(req.envelope)
  res.status(204).send()
})
