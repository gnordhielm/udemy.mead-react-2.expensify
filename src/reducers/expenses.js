
const initialState = []

export default (state=initialState, action) => {
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
