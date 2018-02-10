import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ login }) => (
  <div>
    <button onClick={login}>Log In</button>
  </div>
)

const mapDispatch = dispatch => ({
  login: () => dispatch(startLogin())
})

export default connect(null, mapDispatch)(LoginPage)
