const mongoose = require('mongoose')
const { Schema } = mongoose.Schema

const Movie = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String }
  },
  { timestamps: true }
)
module.exports = mongoose.model('movies', Movie)
