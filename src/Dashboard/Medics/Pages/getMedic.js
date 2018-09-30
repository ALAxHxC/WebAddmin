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

class getMedico extends React.Component {
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
                    />
                </FormControl>
            </div>
        );
    }
};
export default withStyles(styles)(getMedico);
