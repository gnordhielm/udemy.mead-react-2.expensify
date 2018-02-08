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

export const setExpenses = (expenses=[]) => ({
  type: 'SET_EXPENSES', expenses
})

export const startSetExpenses = () => dispatch => {
  return db.ref('expenses')
    .once('value')
    .then(snap => {
      const expenses = []
      snap.forEach(childSnap => {
        expenses.push({
          id: childSnap.key,
          ...childSnap.val()
        })
      })
      dispatch(setExpenses(expenses))
    })
}
