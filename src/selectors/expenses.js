import moment from 'moment'

const sortByLookup = {
  'date': 'createdAt',
  'amount': 'amount'
}

export const getVisibleExpenses = (expenses, {
  text, sortBy, startDate, endDate
}) => expenses
  .filter(({ description, createdAt }) => {

    const createdAtMoment = moment(createdAt)

    const startDateMatch = startDate ?
      startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDateMatch = endDate ?
      endDate.isSameOrAfter(createdAtMoment, 'day') : true

    const textMatch = description
      .toLowerCase()
      .includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  })
  .sort((a, b) => b[sortByLookup[sortBy]] - a[sortByLookup[sortBy]])

export const getExpensesTotal = expenses => expenses
    .reduce((acc, expense) => acc + expense.amount, 0)
