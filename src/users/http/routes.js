const express = require('express')
const ACTIONS = require('../actions')

const router = express.Router()

router.post('/api/exercise/new-user', (req, res) => {
  ACTIONS.addUser
    .do(req.body.username)
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
})

module.exports = router
