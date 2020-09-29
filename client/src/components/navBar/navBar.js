import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './styles';
import LogoutMenu from '../LogoutMenu';

const navBar = ({ classes }) => {
  return (
    <AppBar position="static">
      <Toolbar className={classes.navBar}>
        <div className={classes.login}>
          <Link to="/home">
            <Button>Home</Button>
          </Link>
          <Link to="/about">
            <Button>About me</Button>
          </Link>
          <LogoutMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

navBar.propType = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(navBar);
