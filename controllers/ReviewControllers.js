const { resolveSoa } = require('dns')
const { Review } = require('../models')

const createNewReview = async (req, res) => {
  try {
    const results = await new Review(req.body)
    await results.save()
    return res.status(201).json({ results })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Review.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Review deleted.')
    }
    throw new Error('Review not found.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createNewReview,
  deleteReview
}
