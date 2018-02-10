
import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import LoginPage from '../components/LoginPage.jsx'
import DashboardPage from '../components/DashboardPage.jsx'
import CreatePage from '../components/CreatePage.jsx'
import EditPage from '../components/EditPage.jsx'
import NotFoundPage from '../components/NotFoundPage.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import PublicRoute from './PublicRoute.jsx'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" exact component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={CreatePage} />
        <PrivateRoute path="/edit/:id" component={EditPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
