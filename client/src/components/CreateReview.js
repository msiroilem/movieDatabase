import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { BASE_URL } from '../globals'

export default function CreateReview(props) {
  const history = useHistory()

  const [reviewTitle, setReviewTitle] = useState('')
  const [reviewContent, setMovieContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newReviewData = {
      title: reviewTitle,
      content: reviewContent
    }
    axios
      .post(`${BASE_URL}/reviews`, newReviewData)
      .then(function (response) {
        const newReview = response.data.results
        props.setReviewTitle([newReview, ...props.reviews])
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
          onChange={(e) => setReviewTitle(e.target.value)}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
