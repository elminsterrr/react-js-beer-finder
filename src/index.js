import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootComponent from './components/RootComponent';
import reducers from './reducers';

const createStoreWithMiddleware = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <RootComponent />
  </Provider>,
  document.getElementById('root')
);
