
export const setTextFilter = (text='') => ({
  type: "SET_TEXT",
  text
})

export const setSortBy = sortBy => ({
  type: "SET_SORT_BY",
  sortBy
})

export const sortByDate = () => ({
  type: "SET_SORT_BY",
  sortBy: "date"
})

export const sortByAmount = () => ({
  type: "SET_SORT_BY",
  sortBy: "amount"
})

export const setStartDate = date => ({
  type: "SET_START_DATE",
  date
})

export const setEndDate = date => ({
  type: "SET_END_DATE",
  date
})
