import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: "@@INIT" })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([
    expenses[0],
    expenses[2]
  ])
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const newExpense = {
    id: '4',
    description: 'Foo Bar',
    amount: 9000,
    note: 'baz qux',
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([
    ...expenses,
    newExpense
  ])
})

test('should edit an expense', () => {
  const newDescription = 'foo bar baz'
  const action = {
    type: 'UPDATE_EXPENSE',
    id: expenses[0].id,
    changes: {
      description: newDescription
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].description).toBe(newDescription)
})

test('should not edit expense if expense not found', () => {
  const newDescription = 'foo bar baz'

  const action = {
    type: 'UPDATE_EXPENSE',
    id: '-1',
    changes: {
      description: newDescription
    }
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
