const express = require('express')
const UsersRouter = require('./users/http/routes')
const ExercisesRouter = require('./exercises/http/routes')

const router = express.Router()

router.use(UsersRouter)
router.use(ExercisesRouter)

module.exports = router
