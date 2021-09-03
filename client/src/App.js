import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import About from './components/About'
import CreateMovie from './components/CreateMovie'
import CreateReview from './components/CreateReview'
import Home from './components/Home'
import MovieCard from './components/MovieCard'
import NavBar from './components/NavBar'
import Review from './components/Review'
import Search from './components/Search'
import { BASE_URL } from './globals'

export default function App() {
  const [movies, setMovies] = useState([])
  const [reviews, setReviews] = useState([])
  const [movieFound, setMovieFound] = useState(null)

  useEffect(() => {
    getMovies()
  }, [])

  useEffect(() => {
    getReviews()
  }, [])

  const findMovie = (title) => {
    const foundMovie = movies.find((movie) => movie.title === title)
    if (foundMovie) {
      setMovieFound(foundMovie)
    } else {
      setMovieFound(null)
    }
  }

  const getMovies = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movies/`)
      console.log(res.data.movies)
      setMovies(res.data.movies)
    } catch (error) {
      console.log(error)
    }
  }

  const getReviews = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/reviews`)

      setReviews(res.data.reviews)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteMovie = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/movies/${id}`)
      console.log(res)
      setMovies(movies.filter((movie) => movie._id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <header>
        <NavBar />
        <h1>Tyler's Movie Database</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/search">
            <div>
              <Search findMovie={(title) => findMovie(title)} />
              {movieFound ? (
                <MovieCard
                  deleteMovie={deleteMovie}
                  key={movieFound._id}
                  id={movieFound._id}
                  title={movieFound.title}
                  image={movieFound.image}
                />
              ) : (
                <div>Movie not found</div>
              )}
            </div>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <CreateMovie />
            {movies.map((movie) => (
              <MovieCard
                deleteMovie={deleteMovie}
                key={movie._id}
                id={movie._id}
                title={movie.title}
                image={movie.image}
              />
            ))}
          </Route>
          <Route exact path="/reviews">
            <CreateReview />
            {reviews.map((review) => (
              <Review
                key={review._id}
                id={review._id}
                content={review.content}
              />
            ))}
          </Route>
          <footer>
            <Route exact path="/about">
              <About />
            </Route>
          </footer>
        </Switch>
      </main>
    </div>
  )
}
