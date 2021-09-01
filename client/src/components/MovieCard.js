import React from 'react'

export default function MovieCard(props) {
  return <div onClick={props.onClick}>{props.title}</div>
}
