const mongoose = require('mongoose')
const { Schema } = mongoose.Schema

const Review = new Schema(
  {
    content: { type: String, required: true },
    movie: { type: Schema.Types.ObjectId, ref: 'movies' }
  },
  { timestamps: true }
)
module.exports = mongoose.model('reviews', Review)
