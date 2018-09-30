import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { documents } from '../../../providers/documentTypes';
import Button from '@material-ui/core/Button';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class addMedic extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    username: '',
    password: '',
    userData: null,
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit(event) {
    console.log('An essay was submitted: ' , this.state);
    event.preventDefault();
  }
  render() {
    const { classes } = this.props;

    return (
      <form  onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
        <TextField
          id="username"
          label="Usuario"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('username')}
          margin="normal"
        />
        <TextField
          id="password"
          label="Contraseña"
          type="password"
          defaultValue="jenizaro"
          className={classes.textField}
          onChange={this.handleChange('password')}
          margin="normal"
        />
        <TextField
          id="retype-password-uncontrolled"
          label="Contraseña"
          type="password"
          defaultValue="jenizaro"
          className={classes.textField}
          onChange={this.handleChange('retypepassword')}
          margin="normal"
        />

        <TextField
          required
          id="firstNames-required"
          label="Nombres"
          defaultValue="Eliana Andrea"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          error
          id="lastNames-error"
          label="Error"
          defaultValue="Pedraza"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="document-id-disabled"
          label="Disabled"
          defaultValue="1030626898"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {documents.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="date"
          label="Fecha de nacimiento"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Descripcción"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Especialidad"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="secondary" >
          Enviar
        </Button>
      </form>
    );
  }
}

addMedic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(addMedic);
