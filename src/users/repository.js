const UserModel = require('./database/model')

class UserRepository {
  static create(dto) {
    return new UserModel(dto).save()
  }
}

module.exports = UserRepository
