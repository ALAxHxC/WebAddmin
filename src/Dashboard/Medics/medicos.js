import React from 'react';


import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import GetMedico from './Pages/getMedic';
import Modal from '@material-ui/core/Modal';


import Typography from '@material-ui/core/Typography';

export default class Medics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      user: null,
      open: false,
    };
  }
  getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {  
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

  componentDidMount() {
    fetch("https://monitora-pro.herokuapp.com/users/medic")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            user: null,
            open: false,
            isLoaded: true,
            items: result,
            
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            user: null,
            open: false,
            isLoaded: true,
            error
          });
        }
      )
  }
  handleClick(id, e) {
    e.preventDefault();
   this.state.open =!this.state.open;
   console.log(this.state.open)
    console.log('The link was clicked.', id);
    this.setState({ open: true });
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  
  handleOpen = () => {
    this.setState({ open: true });
  };
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Paper >
          <Button variant="fab" color="primary" aria-label="Add">
            <AddIcon />
          </Button>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>Nombres</TableCell>
                <TableCell >Document</TableCell>
                <TableCell >Especialidad</TableCell>
                <TableCell >Ver más</TableCell>
              </TableRow>
              {items.map(n => {
                return (
                  <TableRow key={n._id}>
                    <TableCell component="th" scope="row">
                      {n.userData.firstNames + " " + n.userData.lastNames}
                    </TableCell>
                    <TableCell >{n.userData.document.identification}</TableCell>
                    <TableCell >{n.especiality}</TableCell>
                    <TableCell >
                      <Button variant="contained" color="secondary" value={n._id} onClick={(e) => this.handleClick(n._id, e)}>
                        Ver mas
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableHead>
          </Table>

        </Paper>
      );
    }
  }
}