import React, { Component } from 'react';
import fire from '../../config/server';
import Button from '@material-ui/core/Button';
class LogoutMenu extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    fire.auth().signOut();
  }
  render() {
    return <Button onClick={this.logout}>Logout</Button>;
  }
}

export default LogoutMenu;
