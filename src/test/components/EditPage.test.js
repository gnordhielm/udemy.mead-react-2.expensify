import 'react-dates/initialize'

import React from 'react'
import { shallow } from 'enzyme'
import { EditPage } from '../../components/EditPage.jsx'
import expenses from '../fixtures/expenses'

let removeExpense, updateExpense, history, wrapper

beforeEach(() => {
  removeExpense = jest.fn()
  updateExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<EditPage
    expense={expenses[0]}
    history={history}
    removeExpense={removeExpense}
    updateExpense={updateExpense}
  />)
})

test('should render EditPage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle edit expense', () => {

  const editedExpense = expenses[1]

  wrapper.find('ExpenseForm').prop('onSubmit')(editedExpense)

  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(updateExpense).toHaveBeenLastCalledWith(editedExpense)

  expect(wrapper).toMatchSnapshot()

})

test('should handle remove expense', () => {

  const id = expenses[0].id

  wrapper.find('button').simulate('click')

  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith(id)

  expect(wrapper).toMatchSnapshot()

})
