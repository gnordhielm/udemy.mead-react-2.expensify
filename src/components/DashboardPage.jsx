import React from 'react'
import ExpenseList from './ExpenseList.jsx'
import ExpensesSummary from './ExpensesSummary.jsx'
import ExpenseListFilters from './ExpenseListFilters.jsx'

const DashboardPage = props => (
  <div>
    <ExpenseListFilters />
    <ExpensesSummary />
    <ExpenseList />
  </div>

)

export default DashboardPage
