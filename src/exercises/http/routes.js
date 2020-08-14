const express = require('express')
const ACTIONS = require('../actions')

const router = express.Router()

router.post('/api/exercise/add', (req, res) => {
  ACTIONS.addExercise
    .do(req.body)
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
})

router.get('/api/exercise/log', (req, res) => {
  ACTIONS.getLog
    .do(req.query.userId, req.query.from, req.query.to, req.query.limit)
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
})

module.exports = router
