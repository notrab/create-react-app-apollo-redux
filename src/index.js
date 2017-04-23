import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'

import App from './App'

const networkInterface = createNetworkInterface({
  uri: process.env.REACT_APP_GRAPHQL_URI
})

const wsClient = new SubscriptionClient(process.env.REACT_APP_SUBSCRIPTIONS_URI, {
  reconnect: true
})

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  dataIdFromObject: o => o.id,
  connectToDevTools: process.env.NODE_ENV === 'development'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
