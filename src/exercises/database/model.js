const mongoose = require('mongoose')
const ExerciseSchema = require('./schema')

const ExerciseModel = mongoose.model('Exercise', ExerciseSchema)

module.exports = ExerciseModel
