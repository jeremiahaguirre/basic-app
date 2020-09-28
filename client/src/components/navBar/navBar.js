import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import LogoutMenu from '../LogoutMenu';

const navBar = ({ classes }) => {
  return (
    <div className={classes.navBar}>
      <AppBar position="static">
        <Toolbar className={classes.navBar}>
          <div className={classes.login}>
            <Link to="/share">
              <Button>
                <AddIcon />
                Share Somthing
              </Button>
            </Link>

            <LogoutMenu />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

navBar.propType = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(navBar);
