// Higher Order Components (HOC)
// Reuse code
// Perform render hijacking
// Manipualte props
// Abstract the state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = ({ info }) => (
  <div>
    <h1>Info</h1>
    <p>The info is {info}</p>
  </div>
)

const withAdminWarning = Component => {
  return props => (
    <div>
      {props.isAdmin && <p>Warning: this is private info.</p>}
      <Component {...props} />
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)

const requireAuthentication = Component => {
  return props => (
    <div>
      {props.isAuthenticated ?
        <Component {...props} /> :
        <p>Please log in.</p>}
    </div>
  )
}

const AuthInfo = requireAuthentication(Info)

ReactDOM.render(
  // <AdminInfo isAdmin={true} info="hi"/>,
  <AuthInfo isAuthenticated={false} info="hi"/>,
  document.getElementById('app')
)
