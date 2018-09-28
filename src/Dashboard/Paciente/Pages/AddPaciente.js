import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import DatePickers from './../../../Generico/Formulario/Date';
import axios from 'axios';

const tiposDocumento = [
    {
        value: 'TI',
        label: 'Tarjeta Identidad',
    },
    {
        value: 'CC',
        label: 'Cedula Ciudadania',
    },
    {
        value: 'TP',
        label: 'Tarjeta Pasaporte',
    },
    {
        value: 'RC',
        label: 'Registro Civil',
    },
    {
        value: 'RC',
        label: 'Cedula Extranjería',
    },
];

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },  
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
});

class UserModel extends React.Component {
    constructor(){
        super();
    }
    render() {
        const { classes } = this.props;
        return (
            <div id="userModulo">
                <FormControl className={classNames(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
        );
    }
};

class CrearPaciente extends React.Component {
    constructor(){
        super();
        this.state = {
            amount: 'hola',
            password: '',
            weight: '',
            checked: true,
            showUserModule: true,
            medicos: []
        }

        this.handleChecked = this.handleChecked.bind(this); 
    }

    handleChecked () {
        this.setState({checked: !this.state.checked});
        if(this.state.checked)
        {
            this.setState({showUserModule: true});
            console.log(this.state.showUserModule);
        }else{
            this.setState({showUserModule: false});
            console.log(this.state.showUserModule);
        }
      }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
        console.log(this.state.checked)
    };

    //LiveCicle did mount render
    componentDidMount() {
        this.loadPropertiesPage();
    }

    //Permite cargar los objetos iniciales de la pagina
    loadPropertiesPage() {
        let axiosConfig =
        {
            headers: {
                'content-type': 'application/json',
            }
        };
        axios.get('https://monitora-pro.herokuapp.com/users/medic',
            axiosConfig)
            .then(({ data }) => {
                console.log(data);
                this.setState(
                    { medicos: data }
                );
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Typography variant="title" gutterBottom>
                    Crear Paciente
      </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="nombresPaciente"
                            name="Primer nombre"
                            label="Nombres Paciente"
                            fullWidth
                            autoComplete="fname"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="apellidosPaciente"
                            name="lastName"
                            label="Apellidos Paciente"
                            fullWidth
                            autoComplete="lname"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            select
                            label="Tipo de Documento"
                            fullWidth
                            className={classNames(classes.margin, classes.textField)}
                            value={this.state.weightRange}
                            onChange={this.handleChange('weightRange')}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">TD</InputAdornment>,
                            }}
                        >
                            {tiposDocumento.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="identificacion"
                            name="identificacion"
                            label="No Identificación"
                            fullWidth
                            autoComplete="0000000000"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DatePickers
                            type="date"
                            label='Fecha Nacimiento'
                            defaultValue='2018-01-31' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="descripcionPaciente"
                            label="Descripción paciente"
                            multiline
                            rowsMax="4"
                            onChange={this.handleChange('multiline')}
                            className={classes.textField}
                            margin="normal"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            select
                            label="Médico"
                            fullWidth
                            className={classNames(classes.margin, classes.textField)}
                            value={this.state.weightRange}
                            onChange={this.handleChange('weightRange')}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Dr.</InputAdornment>,
                            }}
                        >
                            {this.state.medicos.map(medico => (
                                <MenuItem key={medico._id} value={medico.userData.firstNames}>
                                    {medico.userData.firstNames}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value={this.state.checked}
                                onChange={this.handleChecked}
                            />}
                            label="Registrar como usuario"
                        />
                    </Grid>
                    <Grid item xs={12}>
                       <UserModel />
                    </Grid>

                </Grid>
            </React.Fragment>
        );
    }
}


const Comp1 = withStyles(styles)(CrearPaciente);
const Comp2 = withStyles(styles)(UserModel);

export default {Comp1,Comp2}