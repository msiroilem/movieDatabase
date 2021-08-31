const { Schema } = require('mongoose')

const Movie = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String }
  },
  { timestamps: true }
)
module.exports = Movie
