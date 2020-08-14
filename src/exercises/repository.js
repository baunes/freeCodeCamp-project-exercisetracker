const ExerciseModel = require('./database/model')

class UserRepository {
  static create(dto) {
    return new ExerciseModel(dto).save()
  }
}

module.exports = UserRepository
