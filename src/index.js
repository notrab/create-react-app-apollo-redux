import React from 'react'
import { render } from 'react-dom'
import store from './store'
import { ApolloProvider } from 'react-apollo'
import client from './apollo'

import App from './App'

const target = document.querySelector('#root')

render(
  <ApolloProvider store={store} client={client}>
    <App />
  </ApolloProvider>,
  target
)
