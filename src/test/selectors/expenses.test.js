import { getVisibleExpenses } from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'

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
