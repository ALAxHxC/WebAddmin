import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class DashboardComponent extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <AppBarComponent />
            </MuiThemeProvider>
        );
    }
};

class AppBarComponent extends Component {
    render() {
        return (
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
}

function Dashboardt() {
    return (
        <DashboardComponent />
    );


}
export default Dashboardt;