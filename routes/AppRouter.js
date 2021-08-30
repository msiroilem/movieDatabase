const { Router } = require('express')
const MovieController = require('../controllers/MovieControllers')
const ReviewController = require('../controllers/ReviewControllers')
const AppRouter = Router()

AppRouter.get('/', (req, res) => res.send('Success!'))
AppRouter.get('/movies', MovieController.getAllMovies)
AppRouter.get('/movies/:id', MovieController.getMovieById)
AppRouter.post('/movies', MovieController.createNewMovie)
AppRouter.delete('/movies', MovieController.deleteMovie)
AppRouter.post('/reviews', ReviewController.createNewReview)
AppRouter.delete('/reviews', ReviewController.deleteReview)

module.exports = AppRouter
