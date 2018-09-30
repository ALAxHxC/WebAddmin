import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export default class Medics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      user: null
    };
  }

  componentDidMount() {
    fetch("https://monitora-pro.herokuapp.com/users/medic")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
   handleClick(id,e) {
    e.preventDefault();
    
    console.log('The link was clicked.',id);
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Paper >
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