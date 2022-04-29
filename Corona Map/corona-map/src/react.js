import React, { Component } from 'react'
import Chart from 'react-google-charts'
import { Line } from "react-chartjs-2";

//getData()
    // fetch("https://disease.sh//")
    //     .then(response => response.json())
    //     .then(data => this.setState({ totalReactPackages: data.total }))



class MultiLineChart extends Component {
    constructor(){
        super();
  
        this.state= {
            data: null
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
            .then(response => response.json())
            .then(data2 => {
                console.log(data2);
                this.setState({
                    data: data2
                });
                
            })
            .catch(error => console.log(error))
    }

    loadData() {
        if (this.state.data) {
            return (
                <Line 
                   data = {{
                    labels : this.state.data.cases.keys,
                    datasets: [
                        {
                            label: "Case numbers",
                            data: this.state.data.cases.values,
                            fill: false,
                            borderWidth: 5,
                            backgroundColor: 'yellow',
                            borderColor: 'black',
                            responsive: true
                        },
                    ],
                }}
                />  
            )
        }
    }

    lineGraph() {
        return (
            <div className="class">
                <h1>This is plot</h1>
                {this.loadData()}
            </div>
        );
    }

    render() {
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
        return this.lineGraph();

        // export default LineGraph;
    }
}


export default MultiLineChart


