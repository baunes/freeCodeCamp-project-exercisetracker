const Repository = require('../repository')

class GetUSers {
  static do() {
    return Repository.findAll({ _id: 1, username: 1 })
      .then((documents) => documents)
      .catch((err) => {
        console.log('Error getting users', err)
        return { error: 'Error getting users' }
      })
  }
}

module.exports = GetUSers
