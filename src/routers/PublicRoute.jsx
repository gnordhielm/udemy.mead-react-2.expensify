import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

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
      <Component {...props} />
    }
  />
)

const mapState = state => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapState)(PublicRoute)
