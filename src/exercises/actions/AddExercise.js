const Repository = require('../repository')
const UsersRepository = require('../../users/repository')
const { formatDateOutput } = require('../../utils/dates')

function createExercise(dto) {
  return {
    userId: dto.userId,
    description: dto.description,
    duration: dto.duration,
    date: dto.date || new Date().toISOString().substring(0, 10),
    created_on: new Date().valueOf(),
  }
}

function exerciseHasErrors(dto) {
  if (!dto.userId) return { error: 'userId is required' }
  if (!dto.description) return { error: 'description is required' }
  if (!dto.duration) return { error: 'duration is required' }
  return false
}

class AddExercise {
  static async do(dto) {
    const error = exerciseHasErrors(dto)
    if (error) return error

    try {
      const exercise = await Repository.create(createExercise(dto))
      const user = await UsersRepository.findById(exercise.userId)
      return {
        _id: user._id,
        username: user.username,
        description: exercise.description,
        duration: exercise.duration,
        date: formatDateOutput(exercise.date),
      }
    } catch (err) {
      console.log('Error saving exercise', err)
      return { error: 'Error saving exercise' }
    }
  }
}

module.exports = AddExercise
