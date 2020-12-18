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

const getEnvelopeByName = name => {
  const envelope = envelopesArray.find(el => {
    return el.name === name
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
  if (envelopeIndexof !== -1) {
    current.budget += req.budget
    return current
  } else {
    return null
  }
}

const deleteEnvelope = req => {
  const envelopeIndexof = envelopesArray.findIndex(el => el.id === Number(req.id))
  if (envelopeIndexof !== -1) {
    envelopesArray.splice(envelopeIndexof, 1)
    return true
  } else {
    return false
  }
}

const transferEnvelope = (from, howMuch, to) => {
  const fromEnvelope = getEnvelopeByName(from)
  const toEnvelope = getEnvelopeByName(to)
  if (Number(howMuch) <= fromEnvelope.budget) {
    fromEnvelope.budget -= Number(howMuch)
    toEnvelope.budget += Number(howMuch)
    return [toEnvelope, fromEnvelope]
  } else {
    throw new Error(`You can't move more than ${fromEnvelope.budget}`)
  }
}

module.exports = {
  envelopesArray,
  addEnvelope,
  getEnvelopeById,
  updateBudget,
  deleteEnvelope,
  getEnvelopeByName,
  transferEnvelope
}
