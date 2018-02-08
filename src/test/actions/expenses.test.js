import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  startAddExpense, addExpense, updateExpense, removeExpense,
  startSetExpenses, setExpenses
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach(done => {
  const expensesData = {}
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = {
      description, note, amount, createdAt
    }
  })
  database.ref('expenses').set(expensesData).then(done)
})

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
  const expense = expenses[2]
  const action = addExpense(expense)

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense
  })
})

test('should add expense to database and store', done => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      })

      return database
        .ref(`expenses/${actions[0].expense.id}`)
        .once('value')
    })
    .then(snap => {
      expect(snap.val()).toEqual(expenseData)
      done()
    })

})

test('should add expense with defaults to database and store', done => {
  const store = createMockStore({})
  const defaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...defaults
        }
      })

      return database
        .ref(`expenses/${actions[0].expense.id}`)
        .once('value')
    })
    .then(snap => {
      expect(snap.val()).toEqual(defaults)
      done()
    })

})

test('should set up set expenses action object with data', () => {
  const action = setExpenses(expenses)

  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})


test('should fetch the expenses from database', done => {
  const store = createMockStore()
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })

})
