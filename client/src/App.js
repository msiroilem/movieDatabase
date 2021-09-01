import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import About from './components/About'
import CreateMovie from './components/CreateMovie'
import Home from './components/Home'
import MovieCard from './components/MovieCard'
import NavBar from './components/NavBar'
import Review from './components/Review'
import { BASE_URL } from './globals'

export default function App() {
  const [movies, setMovies] = useState([])
  const [deleteMovies, setDeleteMovies] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movies`)

      setMovies(res.data.movies)
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
          <Route exact path="/">
            <Home>
              <Review />
            </Home>
          </Route>
          <Route exact path="/movies">
            <CreateMovie />
            {movies.map((movie) => (
              <MovieCard key={movie.id} title={movie.title} />
            ))}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </main>
      <footer>
        <Switch>
          <Route exact path="./about">
            <About />
          </Route>
        </Switch>
      </footer>
    </div>
  )
}
