import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm.jsx'
import { updateExpense, removeExpense } from '../actions/expenses'

export class EditPage extends React.Component {

  handleSubmit = expense => {
    this.props.updateExpense(expense)
    this.props.history.push('/')
  }

  handleRemove = () => {
    this.props.removeExpense(this.props.expense.id)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <p>Edit expense {this.props.expense.id}</p>
        <button
          onClick={this.handleRemove}
        >Remove</button>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapState = (state, props) => ({
  expense: state.expenses
    .find(({ id }) => id === props.match.params.id)
})

const mapDispatch = dispatch => ({
  updateExpense: expense => dispatch(updateExpense({
    id: expense.id,
    changes: expense
  })),
  removeExpense: id => dispatch(removeExpense({ id }))
})

export default connect(mapState, mapDispatch)(EditPage)
