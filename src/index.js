import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import { Route } from 'react-router';

import './index.scss';
import reducers from './reducers';
import { Home } from './pages';


const history = createHistory();

const reduxRouterMiddleware = routerMiddleware(history);

const finalCreateStore = applyMiddleware(thunk, reduxRouterMiddleware)(createStore);

function configureStore() {
  if (process.env.NODE_ENV === 'development') {
    const store = finalCreateStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
    );

    if (module.hot) {
      module.hot.accept('./reducers', () => store.replaceReducer(reducers));
    }

    return store;
  }
  return finalCreateStore(reducers);
}

const store = configureStore();

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route exact path="/" component={Home} />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
}

render();

if (module.hot) {
  module.hot.accept('./pages', () => render());
}
