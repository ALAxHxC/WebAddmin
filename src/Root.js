import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginComponent from './login/Login';

class RootComponent extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <LoginComponent />
      </MuiThemeProvider>
    );
  }
}

export default RootComponent;
