import 'react-dates/initialize'

import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import ExpenseForm from '../../components/ExpenseForm.jsx'
import expenses from '../fixtures/expenses'

test('should render ExpenseForm without expense data', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: _ => _
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description state on input change', () => {
  const newDescription = 'foo bar baz'
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('input').at(0).simulate('change', {
    target: { value: newDescription }
  })
  expect(wrapper.state('description')).toBe(newDescription)
  expect(wrapper).toMatchSnapshot()
})

test('should set note state on input change', () => {
  const newNote = 'foo bar baz'
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('textarea').simulate('change', {
    target: { value: newNote }
  })
  expect(wrapper.state('note')).toBe(newNote)
  expect(wrapper).toMatchSnapshot()
})

test('should set amount state in input change', () => {
  const newAmount = "12.50"
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('input').at(1).simulate('change', {
    target: { value: newAmount }
  })
  expect(wrapper.state('amount')).toBe(newAmount)
  expect(wrapper).toMatchSnapshot()

})

test('should not set amount if invalid input', () => {
  const newAmount = "12.122"
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('input').at(1).simulate('change', {
    target: { value: newAmount }
  })
  expect(wrapper.state('amount')).toBe('')
  expect(wrapper).toMatchSnapshot()
})

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm
    expense={expenses[0]}
    onSubmit={onSubmitSpy}
  />)
  wrapper.find('form').simulate('submit', {
    preventDefault: _ => _
  })

  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    ...expenses[0],
    id: undefined
  })

})

test('should set new date on input change', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  const newDate = moment()
  wrapper
    .find('withStyles(SingleDatePicker)')
    .prop('onDateChange')(newDate)

  expect(wrapper.state('createdAt')).toEqual(newDate)
  expect(wrapper).toMatchSnapshot()

})

test('should set calendar focused on focus change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const focused = true

  wrapper
    .find('withStyles(SingleDatePicker)')
    .prop('onFocusChange')({ focused })

  expect(wrapper.state('calendarFocused')).toBe(focused)

})
