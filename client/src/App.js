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
  const [deleteMovies, setDeleteMovies] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getMovies()
    console.log('string here', movies)
  }, [])

  useEffect(() => {
    getReviews()
  }, [])

  const getMovies = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movies`)

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

  // useEffect(() => {TODO
  //   async function deleteMovie() {
  //     const res = await axios.delete(`${BASE_URL}/movies`)
  //   }
  //   deleteMovie()
  // }, [])

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/movies">
            <CreateMovie />
            {movies.map((movie) => (
              <MovieCard key={movie._id} id={movie._id} title={movie.title} />
            ))}
          </Route>
          <Route exact path="/reviews">
            <CreateReview />
            {reviews.map((review) => (
              <Review key={review._id} id={review._id} title={review.title} />
            ))}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </main>
    </div>
  )
}
