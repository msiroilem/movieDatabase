import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/navbar.css'

export default function NavBar() {
  return (
    <div className="container">
      <NavLink to="/search">Search</NavLink>
      {/* <NavLink to="/">Home</NavLink>s */}
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}
