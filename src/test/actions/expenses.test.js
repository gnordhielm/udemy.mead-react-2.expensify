import {
  addExpense, updateExpense, removeExpense
} from '../../actions/expenses'

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '12345' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '12345'
  })
})

test('should set up update expense action object', () => {
  const action = updateExpense({ id: '12345', changes: { note: 'hi' } })

  expect(action).toEqual({
    type: 'UPDATE_EXPENSE',
    id: '12345',
    changes: { note: 'hi' }
  })
})

test('should set up add expense action object with parameters', () => {
  const expenseData = {
    description: 'Rent',
    amount: 155000,
    createdAt: 1000,
    note: 'This was my rent'
  }
  const action = addExpense(expenseData)

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should set up add expense action object with defaults', () => {
  const action = addExpense()

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  })
})
