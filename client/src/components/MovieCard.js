import axios from 'axios'
import React from 'react'

export default function MovieCard(props) {
  return (
    <div onClick={props.onClick}>
      {props.title} {props.image}
      <button onClick={() => props.deleteMovie(props.id)}>Delete Movie</button>
    </div>
  )
}
