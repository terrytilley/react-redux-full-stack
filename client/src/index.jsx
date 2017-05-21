import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './assets/scss/app.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
