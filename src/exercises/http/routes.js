const express = require('express')
const ACTIONS = require('../actions')

const router = express.Router()

router.post('/api/exercise/add', (req, res) => {
  ACTIONS.addExercise
    .do(req.body)
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
})

module.exports = router
