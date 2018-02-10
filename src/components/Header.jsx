import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ logout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard">Dashboard</NavLink>
    <NavLink to="/create">Add Expense</NavLink>
    <button onClick={logout}>Log Out</button>
  </header>
)

const mapDispatch = dispatch => ({
  logout: () => dispatch(startLogout())
})

export default connect(null, mapDispatch)(Header)
