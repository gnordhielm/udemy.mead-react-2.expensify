import {
  getVisibleExpenses,
  getExpensesTotal
} from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'


//getVisibleExpenses

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date'
  }
  const result = getVisibleExpenses(expenses, filters)
  expect(result).toEqual([
    expenses[2],
    expenses[1],
  ])
})

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0)
  }

  const result = getVisibleExpenses(expenses, filters)
  expect(result).toEqual([
    expenses[2],
    expenses[0],
  ])
})

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    endDate: moment(0)
  }

  const result = getVisibleExpenses(expenses, filters)
  expect(result).toEqual([
    expenses[0],
    expenses[1],
  ])
})

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date'
  }

  const result = getVisibleExpenses(expenses, filters)
  expect(result).toEqual([
    expenses[2],
    expenses[0],
    expenses[1],
  ])
})

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount'
  }

  const result = getVisibleExpenses(expenses, filters)
  expect(result).toEqual([
    expenses[1],
    expenses[2],
    expenses[0],
  ])
})

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount'
  }

  const result = getVisibleExpenses(expenses, filters)
  expect(result).toEqual([
    expenses[1],
    expenses[2],
    expenses[0],
  ])
})

// getExpensesTotal

test('should return 0 total if no expenses', () => {

  const result = getExpensesTotal([])
  expect(result).toBe(0)
})

test('should return correct total for one expense', () => {

  const result = getExpensesTotal([expenses[0]])
  expect(result).toBe(expenses[0].amount)
})

test('should return correct total for many expenses', () => {

  const result = getExpensesTotal([
    expenses[0],
    expenses[1],
    expenses[2]
  ])
  expect(result).toBe(
    expenses[0].amount +
    expenses[1].amount +
    expenses[2].amount
  )

})
