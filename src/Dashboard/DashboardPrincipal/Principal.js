import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from '../SimpleLineChart';
import SimpleTable from '../SimpleTable';

const styles = theme=> ({
    chartContainer: {
        marginLeft: -22,
    },

    tableContainer: {
        height: 320,
    },
});

class Principal extends React.Component {
    state = {
        open: true,
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="display1" gutterBottom>
                    Orders
              </Typography>
                <Typography component="div" className={classes.chartContainer}>
                    <SimpleLineChart />
                </Typography>
                <Typography variant="display1" gutterBottom>
                    Products
                </Typography>
                <div className={classes.tableContainer}>
                    <SimpleTable />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Principal); 