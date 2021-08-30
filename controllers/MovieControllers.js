const { Movie } = require('../models')

const getAllMovies = async (req, res) => {
  try {
    const results = await Movie.find()
    return res.status(200).json({ results })
  } catch (error) {
    return res.status(500).sned(error.message)
  }
}

const createNewMovie = async (req, res) => {
  try {
    const results = await new Movie(req.body)
    await results.save()
    return res.status(201).jsons({ results })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Movie.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Movie deleted.')
    }
    throw new Error('Movie not found.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllMovies,
  createNewMovie,
  deleteMovie
}
