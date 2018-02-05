import React from 'react'
import ExpensesSummary from './ExpensesSummary.jsx'
import ExpenseListFilters from './ExpenseListFilters.jsx'
import ExpenseList from './ExpenseList.jsx'

const DashboardPage = props => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>

)

export default DashboardPage
