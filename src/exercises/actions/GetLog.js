const Repository = require('../repository')
const UsersRepository = require('../../users/repository')
const { formatDateOutput } = require('../../utils/dates')

class GetLog {
  static async do(userId, from, to, limit) {
    try {
      const user = await UsersRepository.findById(userId)
      const exercises = await Repository.findAllByUser(userId, from, to, limit)

      return {
        _id: user._id,
        username: user.username,
        log: exercises.map((exercise) => ({
          description: exercise.description,
          duration: exercise.duration,
          date: formatDateOutput(exercise.date),
        })),
        count: exercises.length,
      }
    } catch (err) {
      console.log('Error getting log', err)
      return { error: 'Error getting log' }
    }
  }
}

module.exports = GetLog
