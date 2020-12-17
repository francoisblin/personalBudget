const envelopesArray = []
let idEnvelopes = 1

// class Envelope {
//   constructor (name, budget) {
//     this._name = name
//     this._budget = budget
//   }

//   get name () {
//     return this._name
//   }

//   get budget () {
//     return this._budget
//   }
// }

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

module.exports = { envelopesArray, addEnvelope }
