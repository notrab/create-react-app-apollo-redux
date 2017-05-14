import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('renders app with welcome <h1>', () => {
  const app = shallow(<App />)
  const welcome = <h1>create-react-app-apollo-redux</h1>

  expect(app.contains(welcome)).toEqual(true)
})
