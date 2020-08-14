const ExerciseModel = require('./database/model')

class UserRepository {
  static create(dto) {
    return new ExerciseModel(dto).save()
  }

  static findAllByUser(userId) {
    return ExerciseModel.find({ userId: { $eq: userId } }).sort({
      date: 1,
      description: 1,
    })
  }
}

module.exports = UserRepository
