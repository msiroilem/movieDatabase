import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { BASE_URL } from '../globals'

export default function CreateMovie(props) {
  const history = useHistory()

  const [movieTitle, setMovieTitle] = useState('')
  const [movieContent, setMovieContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovieData = {
      title: movieTitle,
      content: movieContent
    }
    axios
      .post(`${BASE_URL}/movies`, newMovieData)
      .then(function (response) {
        const newMovie = response.data.results
        props.setMovieTitle([newMovie, ...props.movies])
        history.push('/')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          onChange={(e) => setMovieTitle(e.target.value)}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
