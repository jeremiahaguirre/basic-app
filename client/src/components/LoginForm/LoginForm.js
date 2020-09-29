import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import fire from '../../config/server';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      formToggle: true,
      email: '',
      password: '',
    };
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        console.log(error);
      });
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <form>
          <label>Email Address</label>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            id="inputEmail"
            placeholder="Email"
          ></input>
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"
            id="inputPass"
            placeholder="Password"
          ></input>
          <button type="submit" onClick={this.login}>
            Login
          </button>
          <button onClick={this.signup}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);
