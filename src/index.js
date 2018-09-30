import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './Dashboard/dashboardadmin';
import Reports from './Dashboard/Reports/reports';
import Medics from './Dashboard/Medics/medicos';
import RootComponent from './Root';
import ComplexButton from './Dashboard/Paciente/Style/ComplexButton';
import addMedic from "./Dashboard/Medics/Pages/addMedic";
class App extends Component {
    render() {
        return (

            <Router>
                <React.Fragment>
                    <Route path={'/login'} component={RootComponent} />
                    <Route path={'/dashboard'} component={Dashboard} />
                    <Route path={'/ComplexButton'} component={ComplexButton} />
                    <Route path={'/reports'} component={Reports} />
                    <Route path={'/medics'} component={Medics}/>
                    <Route path={'/add'} component={addMedic}/>
                </React.Fragment>
            </Router>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));


