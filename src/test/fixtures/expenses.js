import moment from 'moment'

export default [{
  id: 'abc',
  description: 'Gum',
  amount: 195,
  note: '',
  createdAt: 0
}, {
  id: 'def',
  description: 'Rent',
  note: '',
  amount: 155000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: 'ghi',
  description: 'Credit card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}]
