import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo'

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

export default client
