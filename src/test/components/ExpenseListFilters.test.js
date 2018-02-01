import 'react-dates/initialize'

import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters.jsx'
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, setSortBy, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  setSortBy = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()

  wrapper = shallow(<ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilter}
    setSortBy={setSortBy}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
  />)
})

test('should render ExpenseListFilters', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data', () => {
  wrapper.setProps({ filters: altFilters })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const newText = 'foo bar baz'
  wrapper.find('input').simulate('change', {
    target: { value: newText }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(newText)
})

test('should sort by date', () => {
  wrapper.setProps({ filters: altFilters })
  const newSort = 'date'
  wrapper.find('select').simulate('change', {
    target: { value: newSort }
  })
  expect(setSortBy).toHaveBeenLastCalledWith(newSort)
})

test('should sort by amount', () => {
  const newSort = 'amount'
  wrapper.find('select').simulate('change', {
    target: { value: newSort }
  })
  expect(setSortBy).toHaveBeenLastCalledWith(newSort)
})

test('should handle date changes', () => {
  const startDate = moment(0)
  const endDate = moment(1000)
  wrapper
    .find('withStyles(DateRangePicker)')
    .prop('onDatesChange')({ startDate, endDate })

  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)

})

test('should handle date focus changes', () => {
  const calendarFocused = 'startDate'

  wrapper
    .find('withStyles(DateRangePicker)')
    .prop('onFocusChange')(calendarFocused)

  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})
