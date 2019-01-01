import React from 'react'
import { NavLink } from 'react-router-dom'

const LogOutLinks = () => {
  return (
    <div>
        <li><NavLink to='/signin'>Log in</NavLink></li>
        <li><NavLink to='/signup'>Sign in</NavLink></li>
    </div>
  )
}

export default LogOutLinks
