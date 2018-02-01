import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  setTextFilter,
  setSortBy,
  setStartDate,
  setEndDate
} from '../actions/filters'
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends PureComponent {

  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }

  handleCalendarFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }))
  }

  handleTextChange = e => this.props.setTextFilter(e.target.value)

  handleSortChange = e => this.props.setSortBy(e.target.value)

  render() {
      return (
        <div>
          <input
            type="text"
            value={this.props.filters.text}
            onChange={this.handleTextChange}
          />
          <select
            value={this.props.filters.sortBy}
            onChange={this.handleSortChange}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            startDateId='startDate'
            endDate={this.props.filters.endDate}
            endDateId='endDate'
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.handleCalendarFocusChange}
            isOutsideRange={() => false}
            showClearDates={true}
            numberOfMonths={1}
          />
        </div>
    )
  }
}


const mapState = ({ filters }) => ({ filters })

const mapDispatch = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  setSortBy: field => dispatch(setSortBy(field)),
  setStartDate: date => dispatch(setStartDate(date)),
  setEndDate: date => dispatch(setEndDate(date))
})

export default connect(mapState, mapDispatch)(ExpenseListFilters)
