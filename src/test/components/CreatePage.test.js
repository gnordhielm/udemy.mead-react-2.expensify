import 'react-dates/initialize'

import React from 'react'
import { shallow } from 'enzyme'
import { CreatePage } from '../../components/CreatePage.jsx'
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper

beforeEach(() => {
  startAddExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<CreatePage
    startAddExpense={startAddExpense}
    history={history}
  />)
})

test('should render CreatePage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle startAddExpense', () => {
  const newExpense = {
    ...expenses[0], id: undefined
  }

  wrapper.find('ExpenseForm').prop('onSubmit')(newExpense)

  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startAddExpense).toHaveBeenLastCalledWith(newExpense)

  expect(wrapper).toMatchSnapshot()

})
