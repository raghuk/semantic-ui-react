import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './setup/store';
import Routes from './setup/routes';

import 'semantic-ui-css/semantic.min.css'


const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

render(<App />, document.getElementById("root"));
