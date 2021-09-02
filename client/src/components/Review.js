import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function Review(props) {
  const addReview = async (id) => {
    const res = await axios.post(`${BASE_URL}/reviews`)
  }

  return (
    <div>
      <div></div>
    </div>
  )
}
