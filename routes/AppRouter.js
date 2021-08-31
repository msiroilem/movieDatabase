const { Router } = require('express')
const MovieController = require('../controllers/MovieControllers')
const ReviewController = require('../controllers/ReviewControllers')
const AppRouter = Router()

AppRouter.get('/', (req, res) => res.send('Success!'))
AppRouter.get('/movies', MovieController.getAllMovies)
AppRouter.get('/movies/:id', MovieController.getMovieById)

AppRouter.post('/movies', MovieController.createNewMovie)
AppRouter.delete('/movies/:id', MovieController.deleteMovie)
AppRouter.put('/movies/:id', MovieController.updateMovie)

AppRouter.get('/reviews', ReviewController.getAllReviews)
AppRouter.get('/reviews/:id', ReviewController.getReviewById)

AppRouter.post('/reviews', ReviewController.createNewReview)
AppRouter.delete('/reviews/:id', ReviewController.deleteReview)
AppRouter.put('/reviews/:id', ReviewController.updateReview)

module.exports = AppRouter
