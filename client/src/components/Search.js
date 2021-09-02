import React from 'react'

export default function Search({ onSubmit, onChange, value }) {
  return (
    <form onSubmit={(e) => onsubmit(e)}>
      <input
        type="text"
        name="search"
        value={value}
        placeholder="Search Movies"
      ></input>
      <button type="submit">Search</button>
    </form>
  )
}
