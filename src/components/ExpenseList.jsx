import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem.jsx'
import { getVisibleExpenses } from '../selectors/expenses'

export const ExpenseList = props => (
    <div>
      {!!props.expenses.length ?
        (props.expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))) : (
          <p>No expenses</p>
        )
      }
    </div>
)

export default connect(({ expenses, filters }) => ({
  expenses: getVisibleExpenses(expenses, filters),
}))(ExpenseList)
