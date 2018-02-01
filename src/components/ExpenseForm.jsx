import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      amount: props.expense ?
        String(props.expense.amount / 100) : '',
      description: props.expense ?
        props.expense.description : '',
      note: props.expense ?
        props.expense.note : '',
      createdAt: props.expense ?
        moment(props.expense.createdAt) : moment(),
      error:'',
      calendarFocused: false
    }
  }

  onDescriptionChange = e => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onAmountChange = e => {
    const amount = e.target.value
    if (!amount || /^\d{1,}(\.\d{0,2})?$/.test(amount))
      this.setState(() => ({ amount }))
  }

  onNoteChange = e => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onCalendarFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  onSubmit = e => {
    e.preventDefault()

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please enter a description and amount'
      }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <div>
        {!!this.state.error && <p>{this.state.error}</p>}

        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            onChange={this.onDescriptionChange}
            placeholder="Description"
            type="text"
            value={this.state.description}
          />
          <input
            type="text"
            onChange={this.onAmountChange}
            placeholder="Amount"
            value={this.state.amount}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onCalendarFocusChange}
            numberOfMonths={1}
            isOutsideRange={day => false}
          />
          <textarea
            onChange={this.onNoteChange}
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
          ></textarea>
          <button>{this.props.expense ? 'Update' : 'Add'} Expense</button>
        </form>
      </div>
    )
  }
}
