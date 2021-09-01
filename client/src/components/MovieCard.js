import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../globals'

export default function MovieCard(props) {
  const deleteMovie = async (id) => {
    const res = await axios.delete(`${BASE_URL}/movies/${id}`)
  }

  return (
    <div onClick={props.onClick}>
      {props.title}
      {/* <button>Delete Movie</button> */}
    </div>
  )
}
