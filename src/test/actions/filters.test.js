import moment from 'moment'
import {
  setTextFilter, setSortBy, sortByDate, sortByAmount,
  setStartDate, setEndDate
} from '../../actions/filters'

test('set text filter with value generates set text action', () => {
  const text = 'foo'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: "SET_TEXT",
    text
  })
})

test('set text filter with no value generates set text action', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: "SET_TEXT",
    text: ''
  })
})

test('should generate set sort by object with argument', () => {
  const action = setSortBy('date')
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'date'
  })
})

test('should generate sort by date action', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'date'
  })
})

test('should generate sort by amount action', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'amount'
  })
})

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(1000))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(1000)
  })
})
