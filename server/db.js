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
  const envelopeIndexof = envelopesArray.findIndex(el => el.id === Number(current.id))
  console.log(envelopeIndexof)
  if (envelopeIndexof !== -1) {
    current.budget += req.budget
    return current
  } else {
    return null
  }
}

const deleteEnvelope = req => {
  const envelopeIndexof = envelopesArray.findIndex(el => el.id === Number(req.id))
  console.log(envelopeIndexof)
  if (envelopeIndexof !== -1) {
    envelopesArray.splice(envelopeIndexof, 1)
    return true
  } else {
    return false
  }
}

module.exports = { envelopesArray, addEnvelope, getEnvelopeById, updateBudget, deleteEnvelope }
