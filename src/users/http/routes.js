const express = require('express')

const router = express.Router()

router.post('/api/exercise/new-user', (req, res) => {
  res.json({ greeting: 'Added new user' })
})

module.exports = router
