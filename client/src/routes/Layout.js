import React, { Component, Fragment } from 'react';
import fire from '../config/server';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Welcome from '../pages/Welcome';
import About from '../pages/About';
import NavBar from '../components/navBar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  componentDidMount() {
    this.authListener();
  }
  render() {
    return (
      <div>
        {this.state.user ? (
          <Fragment>
            <NavBar />
            <Switch>
              <Route path="/home" user={this.state.user} component={Home} />
              <Route path="/about" component={About} />
              <Redirect from="/*" to="/home" />
            </Switch>
          </Fragment>
        ) : (
          <Switch>
            <Route exact path="/welcome" component={Welcome} />
            <Redirect from="/*" to="/welcome" />
          </Switch>
        )}
      </div>
    );
  }
}

export default Layout;
