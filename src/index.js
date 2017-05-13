import React from 'react'
import { render } from 'react-dom'
import {
  ApolloProvider,
  ApolloClient,
  createNetworkInterface
} from 'react-apollo'

import App from './App'

const networkInterface = createNetworkInterface({
  uri: process.env.REACT_APP_GRAPHQL_URI
})

networkInterface.use([{
  applyMiddleware(req, next) {
    let token = localStorage.getItem('token')

    req.options.headers = {
      authorization: token ? `Bearer ${token}` : null,
      ...req.options.headers
    }

    next()
  }
}])

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
  connectToDevTools: process.env.NODE_ENV === 'development'
})

const target = document.querySelector('#root')

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  target
)
