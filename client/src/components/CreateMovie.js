import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { BASE_URL } from '../globals'
import './CreateMovie.css'

export default function CreateMovie(props) {
  const history = useHistory()

  const [movieTitle, setMovieTitle] = useState('')
  const [movieImage, setMovieImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovieData = {
      title: movieTitle,
      image: movieImage
    }
    axios
      .post(`${BASE_URL}/movies`, newMovieData)
      .then(function (response) {
        const newMovie = response.data.results
        props.setMovieTitle([newMovie, ...props.movies])
        history.push('/')
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div>
      <div className="grid">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Movie Title"
            className="movie-title"
            onChange={(e) => setMovieTitle(e.target.value)}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
