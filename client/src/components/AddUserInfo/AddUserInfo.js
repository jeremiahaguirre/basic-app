import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const AddUserInfo = ({ classes }) => {
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              //   value={}
              id="outlined-basic"
              label="Add User Name Here"
              variant="outlined"
            />
          </form>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(AddUserInfo);
