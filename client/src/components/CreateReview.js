import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { BASE_URL } from '../globals'

export default function CreateReview(props) {
  const history = useHistory()

  const [reviewContent, setReviewContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newReviewData = {
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
    //Stack Overflow helped with making textarea element field bigger with 'cols' and 'rows'
    <div className="grid">
      <form onSubmit={handleSubmit}>
        <textarea
          cols="30"
          rows="10"
          type="text"
          placeholder="Review Content"
          onChange={(e) => setReviewContent(e.target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
