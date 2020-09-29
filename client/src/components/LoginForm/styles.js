const styles = (theme) => ({
  formControl: {
    marginBottom: '20px',
    width: '100%',
  },
  formButton: {
    marginTop: '20px',
  },
  formToggle: {
    background: 'none',
    border: 'none',
    textDecoration: 'underline',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  accountForm: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '400px',
    },
  },
  errorMessage: {
    color: 'firebrick',
  },
});

export default styles;
