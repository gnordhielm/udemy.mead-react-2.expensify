import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import {
  getVisibleExpenses,
  getExpensesTotal
} from '../selectors/expenses'

export const ExpensesSummary = ({
  expensesCount, expensesTotal
}) => (
    <p>
      Viewing {expensesCount} {expensesCount === 1 ? 'expense' : 'expenses'} totalling {numeral(expensesTotal).format('$0,0.00')}
    </p>
)

export default connect(({ expenses, filters }) => {
  const filteredExpenses = getVisibleExpenses(expenses, filters)

  return {
    expensesCount: filteredExpenses.length,
    expensesTotal: getExpensesTotal(filteredExpenses)
  }

})(ExpensesSummary)
