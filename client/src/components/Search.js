import React from 'react'

export default function Search({ onSubmit, onChange, value }) {
  // const []
  return (
    <form onSubmit={(e) => onsubmit(e)}>
      <input
        type="text"
        name="search"
        value={value}
        placeholder="Search Movies"
        // onChange={(e) => onchange(e)}
      ></input>
      <button type="submit">Search</button>
    </form>
  )
}
