import React, { useState } from 'react'
import Search from './Search'

export default function Home() {
  const [searchquery, setStateQuery] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const getSearchResults = async () => {}

  return (
    <div>
      <Search />
    </div>
  )
}
