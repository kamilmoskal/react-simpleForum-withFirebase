import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../actions/authActions'

const LogInLinks = (props) => {
  return (
      <div>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/' className="red darken-3">{props.profile.name}</NavLink></li>
        <li><NavLink to='/create'>Create Topic</NavLink></li>
        <li><NavLink to="/" onClick={props.signOut}>Log out</NavLink></li>
      </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(LogInLinks)
