import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function Review(props) {
  const deleteReview = async (id) => {
    const res = await axios
      .delete(`${BASE_URL}/reviews/${id}`)
      .then((res) => console.log(res.data))
    window.location.reload()
  }

  return (
    <div onClick={props.onClick}>
      {props.content}
      <button onClick={() => deleteReview(props.id)}>Delete Review</button>
    </div>
  )
}
