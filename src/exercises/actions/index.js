const AddExercise = require('./AddExercise')
const GetLog = require('./GetLog')

const ACTIONS = {
  addExercise: AddExercise,
  getLog: GetLog,
}

Object.freeze(ACTIONS)

module.exports = ACTIONS
