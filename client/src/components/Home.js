import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import { BASE_URL } from '../globals'
import MovieCard from './MovieCard'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)

  useEffect(() => {
    if (!searched) {
    }
  }, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
    const res = await axios.get(`${BASE_URL}/movies?search=${searchQuery}`)

    setSearchResults(res.data.searchResults)
    toggleSearched(true)
  }

  const handleChange = async (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <Search onSubmit={getSearchResults} />

      <div className="search">
        <section className="search-results">
          {searchResults.map((search_result) => (
            <MovieCard key={search_result._id} {...search_result} />
          ))}
        </section>
      </div>
    </div>
  )
}
