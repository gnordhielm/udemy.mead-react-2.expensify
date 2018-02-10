
import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import LoginPage from '../components/LoginPage.jsx'
import Header from '../components/Header.jsx'
import DashboardPage from '../components/DashboardPage.jsx'
import CreatePage from '../components/CreatePage.jsx'
import EditPage from '../components/EditPage.jsx'
import HelpPage from '../components/HelpPage.jsx'
import NotFoundPage from '../components/NotFoundPage.jsx'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/edit/:id" component={EditPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
