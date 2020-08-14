const Repository = require('../repository')
const UsersRepository = require('../../users/repository')

function formatDate(dateStr) {
  return new Date(dateStr).toDateString()
}

class GetLog {
  static async do(userId) {
    try {
      const user = await UsersRepository.findById(userId)
      const exercises = await Repository.findAllByUser(userId)

      return {
        _id: user._id,
        username: user.username,
        log: exercises.map((exercise) => ({
          description: exercise.description,
          duration: exercise.duration,
          date: formatDate(exercise.date),
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
