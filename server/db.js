const envelopesArray = []
let idEnvelopes = 1

class Envelope {
  constructor (name, budget) {
    this._name = name
    this._budget = budget
  }

  get name () {
    return this._name
  }

  get budget () {
    return this._budget
  }
}

const envelopeHolidays = new Envelope('Holidays', 12000)
const envelopeCar = new Envelope('Car', 2500)
const addEnvelope = envelope => {
  const newEnvelope = {
    id: idEnvelopes,
    name: envelope.name,
    budget: envelope.budget
  }
  envelopesArray.push(newEnvelope)
  idEnvelopes++
  console.log(envelopesArray)
  return envelopesArray
}

addEnvelope(envelopeHolidays)
addEnvelope(envelopeCar)
console.log(envelopeHolidays.name)

module.exports = { envelopesArray }
