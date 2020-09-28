import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Form, Field } from 'react-final-form';
import styles from './styles';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: null,
    };
  }
  render() {
    return (
      <Form
        onSubmit={(values) => {
          const user = { variables: { user: values } };
          this.state.formToggle
            ? loginMutation(user).catch((error) => this.setState({ error }))
            : signupMutation(user).catch((error) => this.setState({ error }));
        }}
        validate={validate}
        render={({ handleSubmit, form, pristine, invalid }) => (
          <form onSubmit={handleSubmit} className={classes.accountForm}>
            {!this.state.formToggle && (
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="fullname">Username</InputLabel>
                <Field name="fullname">
                  {({ input }) => (
                    <Input
                      id="fullname"
                      type="text"
                      inputProps={{
                        ...input,
                        autoComplete: 'off',
                      }}
                      value={input.value}
                    />
                  )}
                </Field>
              </FormControl>
            )}
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Field name="email">
                {({ input }) => (
                  <Input
                    id="email"
                    type="text"
                    inputProps={{
                      ...input,
                      autoComplete: 'off',
                    }}
                    value={input.value}
                  />
                )}
              </Field>
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Field name="password">
                {({ input }) => (
                  <Input
                    id="password"
                    type="password"
                    inputProps={{
                      ...input,
                      autoComplete: 'off',
                    }}
                    value={input.value}
                  />
                )}
              </Field>
            </FormControl>
            <FormControl className={classes.formControl}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Button
                  type="submit"
                  className={classes.formButton}
                  variant="contained"
                  size="large"
                  color="secondary"
                  disabled={pristine || invalid}
                >
                  {this.state.formToggle ? 'Enter' : 'Create Account'}
                </Button>
                <Typography>
                  <button
                    className={classes.formToggle}
                    type="button"
                    onClick={() => {
                      form.reset();
                      this.setState({
                        error: null,
                        formToggle: !this.state.formToggle,
                      });
                    }}
                  >
                    {this.state.formToggle
                      ? 'Create an account.'
                      : 'Login to existing account.'}
                  </button>
                </Typography>
              </Grid>
            </FormControl>
            <Typography className={classes.errorMessage}>
              {(this.state.error && this.state.formToggle) ||
                (this.state.error && !this.state.formToggle)}
            </Typography>
          </form>
        )}
      />
    );
  }
}
export default withStyles(styles)(LoginForm);
