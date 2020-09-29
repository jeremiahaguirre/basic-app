import React, { Component } from 'react';
import About from './About';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
class AboutContainer extends Component {
  render() {
    return <About classes={this.props.classes} />;
  }
}
export default withStyles(styles)(AboutContainer);
