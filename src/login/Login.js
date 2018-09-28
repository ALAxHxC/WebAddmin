import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './login.css';
import axios from 'axios';
import { withRouter } from 'react-router';


class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = { userName: '1030626898', password: 'jenizaro', jsonReturnedValue: [] }

  handleClick() {
    this.postLogin();
    this.props.history.push('/dashboard');
  }

  postLogin(props) {
    var postData =
    {
      username: this.state.userName,
      password: this.state.password
    };

    let axiosConfig =
    {
      headers: {
        'content-type': 'application/json',
      }
    };

    axios.post('https://monitora-pro.herokuapp.com/users/login',
      postData,
      axiosConfig
    )
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        let oldComments = this.state.jsonReturnedValue;
        this.setState({ jsonReturnedValue: oldComments.concat(data) });
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  render() {
    return (
      <div className="login">
        <TextField
          id="text-field-default"
          floatingLabelText="Usuario"
          type='string'
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })} />
        <br />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
          value={this.state.password}
          onChange={(event) => this.setState({ password: event.target.value })}
        />
        <br />

        <RaisedButton
          label="Default"
          onClick={this.handleClick} />
      </div>
    )
  }
}
export default withRouter(LoginComponent);