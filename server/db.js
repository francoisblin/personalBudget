const envelopesArray = []
let idEnvelopes = 1

const isValidEnvelope = req => {
  if (!req.name || typeof req.name !== 'string') {
    throw new Error('Envelope Name must be a string')
  }
  if (!isNaN(parseFloat(req.budget)) && isFinite(req.budget)) {
    req.budget = Number(req.budget)
  } else {
    throw new Error('Budget must be a number.')
  }
  return true
}

// const envelopeHolidays = new Envelope('Holidays', 12000)
// const envelopeCar = new Envelope('Car', 2500)
const addEnvelope = envelope => {
  if (isValidEnvelope(envelope)) {
    const newEnvelope = {
      id: idEnvelopes,
      name: envelope.name,
      budget: envelope.budget
    }
    envelopesArray.push(newEnvelope)
    idEnvelopes++
    return envelopesArray[envelopesArray.length - 1]
  }
}

const getEnvelopeById = id => {
  const envelope = envelopesArray.find(el => {
    return el.id === Number(id)
  })
  return envelope
}

const updateBudget = (current, req) => {
  if (!isNaN(parseFloat(req.budget)) && isFinite(req.budget)) {
    req.budget = Number(req.budget)
  } else {
    throw new Error('Budget must be a number')
  }
  current.budget += req.budget
  return current
}
module.exports = { envelopesArray, addEnvelope, getEnvelopeById, updateBudget }
