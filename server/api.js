const express = require('express')
const router = express.Router()

const envelopesRouter = require('./envelopes')

router.use('/envelopes', envelopesRouter)

module.exports = router
