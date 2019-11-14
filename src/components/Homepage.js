import React from 'react';
import '../App.css';
import logo from '../uicLogo.svg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <section className="App-header">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="UIC-Header">College of Pharmacy</h3>
        <h5 className="App-Name">Book-a-Room</h5>
      </header>
      <div className="App-login">
        <div className="app-login-button">
          <Button variant="contained" color="primary" size="large" className={classes.button} href="https://discovery.illinois.edu/discovery/DS?entityID=https%3A%2F%2Fchiuportal1.admin.uillinois.edu%2Fshibboleth&return=https%3A%2F%2Fmy.uic.edu%2FShibboleth.sso%2FLogin%3FSAMLDS%3D1%26target%3Dss%253Amem%253A41d599f8dd95d392d4230dea2799cb1d4a21eb1a350920c5959215174651d861">
            Log In
          </Button>
        </div>
      </div>
    </section>
  );
}
