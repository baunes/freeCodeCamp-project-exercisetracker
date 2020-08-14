const express = require('express')
const ShortUrlRouter = require('./users/http/routes')

const router = express.Router()

router.use(ShortUrlRouter)

module.exports = router
