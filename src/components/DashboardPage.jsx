import React from 'react'
import ExpenseList from './ExpenseList.jsx'
import ExpenseListFilters from './ExpenseListFilters.jsx'

const DashboardPage = props => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>

)

export default DashboardPage
