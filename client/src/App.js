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
import Search from './components/Search'
import { BASE_URL } from './globals'

export default function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMovie() {
      const res = await axios.get(`${BASE_URL}/movies`)
      setMovies(res.data.results)
    }
    getMovie()
  }, [])

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home>
              <Search />
              <MovieCard />
            </Home>
          </Route>
          <Route exact path="/movies">
            <CreateMovie movies={movies} setMovies={setMovies} />
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
