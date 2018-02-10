import db from '../firebase/firebase'
import uuid from 'uuid'

export const setExpenses = (expenses=[]) => ({
  type: 'SET_EXPENSES', expenses
})

export const startSetExpenses = () => (dispatch, getState) => {

  const { uid } = getState().auth

  return db.ref(`users/${uid}/expenses`)
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

export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData={}) => {

  return (dispatch, getState) => {

    const { uid } = getState().auth

    const {
      description='',
      note='',
      amount=0,
      createdAt=0
    } = expenseData

    const expense = {
      description, note, amount, createdAt
    }

    return db.ref(`users/${uid}/expenses`)
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


export const startRemoveExpense = id => (dispatch, getState) => {
  const { uid } = getState().auth

  return db.ref(`users/${uid}/expenses/${id}`)
    .remove()
    .then(() => {
      dispatch(removeExpense({ id }))
    })

}


export const updateExpense = ({ id, changes }) => ({
  type: 'UPDATE_EXPENSE',
  id, changes
})


export const startUpdateExpense = ({ id, changes }) => (dispatch, getState) => {
  const { uid } = getState().auth

  return db.ref(`users/${uid}/expenses/${id}`)
    .update(changes)
    .then(() => {
      dispatch(updateExpense({ id, changes }))
    })

}
