import 'react-dates/initialize'

import React from 'react'
import { shallow } from 'enzyme'
import { CreatePage } from '../../components/CreatePage.jsx'
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper

beforeEach(() => {
  addExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<CreatePage
    addExpense={addExpense}
    history={history}
  />)
})

test('should render CreatePage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle addExpense', () => {
  const newExpense = {
    ...expenses[0], id: undefined
  }

  wrapper.find('ExpenseForm').prop('onSubmit')(newExpense)

  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(addExpense).toHaveBeenLastCalledWith(newExpense)

  expect(wrapper).toMatchSnapshot()

})
