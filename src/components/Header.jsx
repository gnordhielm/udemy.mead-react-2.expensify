import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = props => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/">Dashboard</NavLink>
    <NavLink to="/create">Add Expense</NavLink>
    {/* <NavLink to="/help">Help</NavLink> */}
  </header>
)

export default Header
