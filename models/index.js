const mongoose = require('mongoose')
const MovieSchema = require('./movie')
const ReviewSchema = require('./review')

const Movie = mongoose.model('movies', MovieSchema)
const Review = mongoose.model('reviews', ReviewSchema)

module.exports = {
  Movie,
  Review
}
