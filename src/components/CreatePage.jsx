import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm.jsx'
import { startAddExpense } from '../actions/expenses'

export class CreatePage extends React.Component {

  onSubmit = expense => {

    this.props.startAddExpense(expense)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h3>Add Expense</h3>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatch)(CreatePage)
