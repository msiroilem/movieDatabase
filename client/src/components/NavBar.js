import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Create New Movie</NavLink>
    </div>
  )
}
