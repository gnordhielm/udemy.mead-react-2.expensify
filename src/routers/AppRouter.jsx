/*

how can I use this in ops, how can this be better.
path to string is silly. There should be a more standardized api.
switch and component are both good

I need resolves somewhere
Exact is a pain in the ass

*/

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginPage from '../components/LoginPage.jsx'
import Header from '../components/Header.jsx'
import DashboardPage from '../components/DashboardPage.jsx'
import CreatePage from '../components/CreatePage.jsx'
import EditPage from '../components/EditPage.jsx'
import HelpPage from '../components/HelpPage.jsx'
import NotFoundPage from '../components/NotFoundPage.jsx'

const AppRouter = () => (
  <BrowserRouter>
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
  </BrowserRouter>
)

export default AppRouter
