import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import index from './reducers/index'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const store = createStore(index, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
