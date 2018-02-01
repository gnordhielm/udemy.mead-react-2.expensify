import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// Expenses actions

const addExpense = ({
  description='',
  note='',
  amount=0,
  createdAt=0
}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})


const updateExpense = ({ id, changes }) => ({
  type: 'UPDATE_EXPENSE',
  id, changes
})

// Expenses reducer

const expensesReducerDefaultState = []

const expensesReducer = (state=expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]

    case 'REMOVE_EXPENSE':
      if (!action.id)
        throw new Error('remove expense requires an id')
      return state.filter(({ id }) => id !== action.id)

    case 'UPDATE_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.changes
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

// Filters actions

const setTextFilter = (text='') => ({
  type: "SET_TEXT", text
})

const sortByDate = () => ({
  type: "SET_SORT_BY",
  sortBy: "date"
})

const sortByAmount = () => ({
  type: "SET_SORT_BY",
  sortBy: "amount"
})

const setStartDate = date => ({
  type: "SET_START_DATE",
  date
})

const setEndDate = date => ({
  type: "SET_END_DATE",
  date
})

// Filters reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state=filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.text
      }
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.sortBy
      }
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.date
      }
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.date
      }
    default:
      return state
  }
}

// Get visible expenses
const getVisibleExpenses = (expenses, {
  text, sortBy, startDate, endDate
}) => expenses
  .filter(expense => {
    const startDateMatch = typeof startDate !== 'number'
      || expense.createdAt >= startDate

    const endDateMatch = typeof endDate !== 'number'
      || expense.createdAt <= endDate

    const textMatch = expense.description
      .toLowerCase()
      .includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  })

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)



// TESTING

store.subscribe(() => {
  const { expenses, filters } = store.getState()
  const { sortBy } = filters
  console.log(getVisibleExpenses(expenses, filters)
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      }
      return 0
    }))
})


const expenseOne = store.dispatch(addExpense({
  description: 'July rent',
  amount: 150000
}))

const expenseTwo = store.dispatch(addExpense({
  description: 'Coffee',
  amount: 1300
}))

//
// store.dispatch(removeExpense({
//   id: expenseTwo.expense.id
// }))
//
// store.dispatch(updateExpense({
//   id: expenseOne.expense.id,
//   changes: { amount: 70000 }
// }))
//
// store.dispatch(setTextFilter({
//   text: "hello"
// }))

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
//
// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate(0))
store.dispatch(setTextFilter("coffee"))
