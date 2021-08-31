const { Schema } = require('mongoose')

const Review = new Schema(
  {
    content: { type: String, required: true },
    movie: { type: Schema.Types.ObjectId, ref: 'movies' }
  },
  { timestamps: true }
)
module.exports = Review
