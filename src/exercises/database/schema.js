const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      index: true,
      required: true,
    },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: String },
    created_on: { type: Number },
  },
  { collection: 'exercises' }
)

module.exports = ExerciseSchema
