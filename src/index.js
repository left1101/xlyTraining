import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory, IndexLink } from 'react-router'
import index from './reducers/index'
import './index.css'
import App from './App'
import AddMessage from './containers/AddMessage'
import WeChatMessage from './containers/WeChatMessage'
import registerServiceWorker from './registerServiceWorker'

const logger = createLogger();
const store = createStore(index, applyMiddleware(logger));

// const routes = <Route path="/" component={App}>
//   <IndexRedirect to="/weChat" />
//   <Route path="weChat" component={WeChatMessage}/>
//   <Route path="addMessage" component={AddMessage}/>
// </Route>

const routes = [{
  path: '/',
  component: App,
  indexRoute: { component: WeChatMessage },
  childRoutes: [
    { path: 'weChat', component: WeChatMessage },
    { path: 'addMessage', component: AddMessage }
  ]
}]

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
    {/*<WeChatMessage />*/}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
