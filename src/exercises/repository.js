const ExerciseModel = require('./database/model')

class UserRepository {
  static create(dto) {
    return new ExerciseModel(dto).save()
  }

  static findAllByUser(userId, from, to, limit) {
    const filter = { userId: { $eq: userId } }

    const dateFilter = []
    if (from) dateFilter.push({ $gte: from })
    if (to) dateFilter.push({ $lte: to })
    if (dateFilter.length > 0)
      filter.date = dateFilter.reduce((acc, curr) => ({ ...acc, ...curr }), {})

    const query = ExerciseModel.find(filter)
    if (limit) {
      query.limit(Number.parseInt(limit, 10))
    }
    return query.sort({
      date: 1,
      description: 1,
    })
  }
}

module.exports = UserRepository
