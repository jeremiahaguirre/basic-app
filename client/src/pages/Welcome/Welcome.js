import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm';

const Welcome = ({ classes }) => {
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Typography className={classes.subheading} variant="button" gutterBottom>
        My Basic App
      </Typography>
      <LoginForm />
    </Grid>
  );
};

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Welcome;
