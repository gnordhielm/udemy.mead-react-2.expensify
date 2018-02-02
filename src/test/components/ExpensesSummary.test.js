import 'react-dates/initialize'

import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary.jsx'

test('should render ExpensesSummary with no expenses', () => {

  const wrapper = shallow(<ExpensesSummary
    expenseCount={0}
    expensesTotal={0}
  />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary with one expense', () => {

  const wrapper = shallow(<ExpensesSummary
    expenseCount={1}
    expensesTotal={100}
  />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary with expenses', () => {
  const wrapper = shallow(<ExpensesSummary
    expenseCount={45}
    expensesTotal={12345}
  />)
  expect(wrapper).toMatchSnapshot()
})
