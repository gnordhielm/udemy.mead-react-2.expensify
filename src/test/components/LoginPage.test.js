import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage.jsx'
import expenses from '../fixtures/expenses'

test('should render LoginPage', () => {
  const wrapper = shallow(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
})
