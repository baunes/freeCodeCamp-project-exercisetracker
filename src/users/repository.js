const UserModel = require('./database/model')

class UserRepository {
  static create(dto) {
    return new UserModel(dto).save()
  }

  static findAll(projection = {}) {
    return UserModel.find({}, projection).sort({ username: 1 })
  }

  static findById(id) {
    return UserModel.findById(id)
  }
}

module.exports = UserRepository
