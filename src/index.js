import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import index from './reducer/index'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(index)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
