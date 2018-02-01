import moment from 'moment'

// Filters reducer

const initialState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

export default (state=initialState, action) => {
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
