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

  useEffect(() => {
    getMovies()
  }, [])

  useEffect(() => {
    getReviews()
  }, [])

  const getMovies = async (id) => {
    //TODO {id} in ln 30 needs to be set up differently in order to find movie in database on frontend
    try {
      const res = await axios.get(`${BASE_URL}/movies/${id}`)

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

  return (
    <div className="App">
      <header>
        <NavBar />
        <h1>Tyler's Movie Database</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <CreateMovie />
            {movies.map((movie) => (
              <MovieCard
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
