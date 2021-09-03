import React, { useState } from 'react'

export default function Search({ findMovie }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    findMovie(value)
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="search"
        placeholder="Search Movies"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  )
}
