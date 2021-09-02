const { url } = require('inspector')
const { Schema } = require('mongoose')

const Movie = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String }
  },
  { timestamps: true }
)
module.exports = Movie
