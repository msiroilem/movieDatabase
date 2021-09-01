import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../globals'

export default function Search({ onSubmit, onChange, value }) {
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getSearchResults = async (e) => {
    e.preventDefault()
    const res = await axios.get(`${BASE_URL}/movies`)
    setSearchResults()
    toggleSearched(true)
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
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
