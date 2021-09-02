const { Schema } = require('mongoose')

const Movie = new Schema(
  {
    title: { type: String, required: true },
    image: { type: Image }
  },
  { timestamps: true }
)
module.exports = Movie
