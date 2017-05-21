import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import App from './components/App';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Header from './components/Header';
import './assets/scss/app.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
