import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import client from './apollo';

import App from './App';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  target
);
