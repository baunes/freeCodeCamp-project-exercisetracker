const Repository = require('../repository')

function createUser(username) {
  return {
    username,
    created_on: new Date().valueOf(),
  }
}

class AddUser {
  static do(username) {
    return Repository.create(createUser(username))
      .then((document) => ({
        _id: document._id,
        username: document.username,
      }))
      .catch((err) => {
        if (err.message.indexOf('E11000') !== -1) {
          return { error: `Error: username (${username}) already exists` }
        }
        console.log('Error saving user', err)
        return { error: 'Error saving user' }
      })
  }
}

module.exports = AddUser
