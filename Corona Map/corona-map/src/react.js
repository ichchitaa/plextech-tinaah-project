import React, { Component } from 'react'
import Chart from 'react-google-charts'

//getData()
    // fetch("https://disease.sh//")
    //     .then(response => response.json())
    //     .then(data => this.setState({ totalReactPackages: data.total }))



class MultiLineChart extends Component {
    constructor(){
        super();
  
        this.state= {
            data: 1
        };
    }
    componentDidMount() {
        // Simple GET request using fetch
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
            .then(response => 
                this.setState({
                data: response
            }))
    }

    // var result = JSON.parse(response);

    // var dictionary = {}

    // for (var key in result) {
    //     dictionary[key] = result[key];
    // }

    // const lineData = []
    // data.push(['Time', 'Cases'])
    // for (var key in dictionary) {
    //     data.push([key, dictionary[value]])
    // }

    // const lineOptions = {
    //     xAxis: {
    //         title: 'Time',
    //     },
    //     yAxis: {
    //         title: 'Cases',
    //     }
    // }

    render() {
        console.log("Hello world");
        return 
            // <div className="class">
            //     <h2>Historical Data</h2>
            //     <Chart 
            //       width={'800px'}
            //       height={'500px'}
            //       chartType='LineChart'
            //       loader={<div>Loading graph</div>}
            //       data={lineData}
            //       options={lineOptions}
            //       rootProps={{'data-testid' : 2}}
            //     />
            // </div>
            // {this.state.data}
        //)
    }
}
export default MultiLineChart


