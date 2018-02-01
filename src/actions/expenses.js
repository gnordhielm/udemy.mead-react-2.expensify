
import uuid from 'uuid'

// Expenses actions

export const addExpense = ({
  description='',
  note='',
  amount=0, // in pennies
  createdAt=0
}={}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})


export const updateExpense = ({ id, changes }) => ({
  type: 'UPDATE_EXPENSE',
  id, changes
})
