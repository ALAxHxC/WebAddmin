import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
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
    convertData(result){
        let newData=Array();
        result.map(n => {
            newData.push({
                spo2 : n.data.oximeter.spo2,
                pulse : n.data.oximeter.pulse,
                date : n.createAt,
                name : n.createAt
            });
        });
        return newData;
    }
    componentDidMount() {
        fetch("https://monitora-pro.herokuapp.com/traige")
            .then(res => res.json())
            .then(
                (result) => {
                   let  data= this.convertData(result);
                    console.log("DATA",data)
                    this.setState({
                        isLoaded: true,
                        items: data
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
                <Paper>
                    <ResponsiveContainer width="99%" height={320}>
                        <LineChart data={items}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid vertical={false} strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="spo2" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="pulse" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </Paper>
            );
        }
    }
}