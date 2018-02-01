import 'react-dates/initialize'

import React from 'react'
import { shallow } from 'enzyme'
import DashboardPage from '../../components/DashboardPage.jsx'
import expenses from '../fixtures/expenses'

test('should render DashboardPage', () => {
  const wrapper = shallow(<DashboardPage />)
  expect(wrapper).toMatchSnapshot()
})
