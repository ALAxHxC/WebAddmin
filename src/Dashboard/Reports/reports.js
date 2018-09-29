import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://monitora-pro.herokuapp.com/patient")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
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
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell >Calories</TableCell>
              <TableCell >Fat (g)</TableCell>
              <TableCell >Carbs (g)</TableCell>
              <TableCell >Protein (g)</TableCell>
            </TableRow>
            {items.map(n => {
            return (
              <TableRow key={n._id}>
                <TableCell component="th" scope="row">
                  {n.firstNames}
                </TableCell>
                <TableCell >{n.lastNames}</TableCell>
                <TableCell >{n.document.identification}</TableCell>
                <TableCell >{n.document.type}</TableCell>
                <TableCell >{n.description}</TableCell>
              </TableRow>
            );
          })}
          </TableHead>
          <TableBody>
            </TableBody></Table>

        </Paper>
      );  
    }
  }
}