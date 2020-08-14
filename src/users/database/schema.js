const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, index: true },
    created_on: { type: Number },
  },
  { collection: 'users' }
)

module.exports = UserSchema
