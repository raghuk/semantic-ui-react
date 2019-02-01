import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import NoMatch from '../components/NoMatch';

import Home from '../containers/home';

import { leftItems, rightItems } from './nav';

const Routes = (props) => (
  <Layout leftItems={leftItems} rightItems={rightItems}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </Layout>
);

export default Routes;
