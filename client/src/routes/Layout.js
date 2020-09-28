import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
// import Home from '../pages/Home';
import Welcome from '../pages/Welcome';
// import About from '../pages/About';
// import NavBar from '../components/navBar';

export default () => (
  <Switch>
    <Route exact path="/welcome" component={Welcome} />
    <Redirect from="/*" to="/welcome" />
  </Switch>
);
