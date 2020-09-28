import React, { Component } from 'react';
import Welcome from './Welcome';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';

class WelcomeContainer extends Component {
  render() {
    return <Welcome classes={this.props.classes} />;
  }
}
export default withStyles(styles)(WelcomeContainer);

WelcomeContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};
