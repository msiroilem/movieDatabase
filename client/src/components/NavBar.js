import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/navbar.css'

export default function NavBar() {
  return (
    <div className="container">
      <NavLink className="nav-link" to="/search">
        Search
      </NavLink>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/movies">
        Movies
      </NavLink>
      <NavLink className="nav-link" to="/reviews">
        Reviews
      </NavLink>
      <footer>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </footer>
    </div>
  )
}
