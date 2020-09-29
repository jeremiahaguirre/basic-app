import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const AddUserInfo = ({ classes, addInfo, user }) => {
  const fieldValues = {
    fullName: '',
    age: '',
    city: '',
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...values, [name]: value });
  };
  const [values, setVal] = useState(fieldValues);

  const handelSubmit = (e) => {
    e.preventDefault();
    addInfo(values);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <form
          onSubmit={handelSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="number"
            label="Your Age"
            name="age"
            value={values.age}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Your City"
            name="city"
            value={values.city}
            onChange={handleChange}
          />

          <Button type="submit" variant="outlined">
            Add
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(AddUserInfo);
