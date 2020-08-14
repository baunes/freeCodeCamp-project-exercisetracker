const AddUser = require('./AddUser')
const GetUsers = require('./GetUsers')

const ACTIONS = {
  addUser: AddUser,
  getUsers: GetUsers,
}

Object.freeze(ACTIONS)

module.exports = ACTIONS
