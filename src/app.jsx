import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter.jsx'
import configureStore from './store/configureStore'

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import { getVisibleExpenses } from './selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({
  description: 'Water bill',
  amount: '20000',
  createdAt: Date.now() + 5
}))

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: '15000',
  createdAt: Date.now()
}))

store.dispatch(addExpense({
  description: 'Rent',
  amount: '109500',
  createdAt: Date.now()
}))

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById("app"))
