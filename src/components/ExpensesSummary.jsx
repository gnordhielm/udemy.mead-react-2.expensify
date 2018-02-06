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
    <h3>
      Viewing {expensesCount} {expensesCount === 1 ? 'expense' : 'expenses'} totalling {numeral(expensesTotal/100).format('$0,0.00')}
    </h3>
)

const mapState = ({ expenses, filters }) => {
  const filteredExpenses = getVisibleExpenses(expenses, filters)

  return {
    expensesCount: filteredExpenses.length,
    expensesTotal: getExpensesTotal(filteredExpenses)
  }
}

export default connect(mapState)(ExpensesSummary)
