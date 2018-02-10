import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header.jsx'

export const PublicRoute = ({
  isAuthenticated,
  path,
  exact,
  component: Component,
  ...props
}) => (
  <Route
    path={path}
    exact={exact}
    component={() => isAuthenticated ?
      <Redirect to="/dashboard"/> :
      <div>
        <Header />
        <Component {...props} />
      </div>
    }
  />
)

const mapState = state => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapState)(PublicRoute)
