const { Review } = require('../models')

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params
    const review = await Review.findById(id)
    if (review) {
      return res.status(200).json({ review })
    }
    return res.status(404).send('Specified review does not exist.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
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

const updateReview = async (req, res) => {
  try {
    const { id } = req.params
    await Review.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, movie) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!review) {
          res.status(500).send('Review not found!')
        }
        return res.status(200).json(review)
      }
    )
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllReviews,
  getReviewById,
  createNewReview,
  deleteReview,
  updateReview
}
