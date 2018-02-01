import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: "@@INIT" })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const action = {
    type: 'SET_SORT_BY',
    sortBy: 'amount'
  }
  const state = filtersReducer(undefined, action)
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }

  const action = {
    type: 'SET_SORT_BY',
    sortBy: 'date'
  }

  const state = filtersReducer(currentState, action)

  expect(state.sortBy).toBe('date')
})


test('should set text', () => {

  const action = {
    type: 'SET_TEXT',
    text: 'foo'
  }

  const state = filtersReducer(undefined, action)

  expect(state.text).toBe('foo')
})


test('should set startDate', () => {

  const newStart = moment()

  const action = {
    type: 'SET_START_DATE',
    date: newStart
  }

  const state = filtersReducer(undefined, action)

  expect(state.startDate.valueOf()).toBe(newStart.valueOf())
})


test('should set endDate', () => {

  const newEnd = moment()

  const action = {
    type: 'SET_END_DATE',
    date: newEnd
  }

  const state = filtersReducer(undefined, action)

  expect(state.endDate.valueOf()).toBe(newEnd.valueOf())
})
