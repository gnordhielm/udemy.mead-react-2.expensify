import db from '../firebase/firebase'
import uuid from 'uuid'

// Expenses actions

export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData={}) => {

  return dispatch => {

    const {
      description='',
      note='',
      amount=0,
      createdAt=0
    } = expenseData

    const expense = {
      description, note, amount, createdAt
    }

    return db.ref('expenses')
      .push(expense)
      .then(ref => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }))
      })

  }
}

export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})


export const updateExpense = ({ id, changes }) => ({
  type: 'UPDATE_EXPENSE',
  id, changes
})
