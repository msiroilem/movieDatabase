import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { BASE_URL } from '../globals'

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
        props.setMovieImage([newMovie, ...props.image])
        history.push('/')
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="grid">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          onChange={(e) => setMovieTitle(e.target.value)}
        ></input>
        <input
          type="url"
          placeholder="Movie Image"
          onChange={(e) => setMovieImage(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
