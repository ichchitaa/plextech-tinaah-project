import './Dashboard.css';
import axios from 'axios';
import react, { Component } from 'react'


class Dashboard extends Component {
  constructor(props){
      super(props);
      this.state = {data: 
        {
            "updated": 0,
            "cases": 0,
            "todayCases": 0,
            "deaths": 0,
            "recovered": 0,
            "todayRecovered": 0,
            "active": 0,
            "critical": 0,
            "casesPerOneMillion": 0,
            "deathsPerOneMillion": 0,
            "tests": 0,
            "testsPerOneMillion": 0,
            "population": 0,
            "oneCasePerPeople": 0,
            "oneDeathPerPeople": 0,
            "oneTestPerPeople": 0,
            "activePerOneMillion": 0,
            "recoveredPerOneMillion": 0,
            "criticalPerOneMillion": 0,
            "affectedCountries": 0
          }
      }
      this.state.data = this.fetchAllData.bind(this);
  }

  fetchAllData() {
    axios.get('https://corona.lmao.ninja/v2/all')
      .then( (response) => {
        console.log("response", response);
        this.setState({
          data: response.data
        });
        console.log("fetchAllData", this.state.data);
      })
      .catch( (error) => {
        console.log(error);
      });  
  } 
  render() {
    return (
      <div className="board">
          <div className="box">
            <p>Global Cases: {this.state.data.cases}</p>
          </div>
          <div className="box">
            <p>Cases per 1 million: {this.state.data.casesPerOneMillion}</p> 
          </div>
          <div className="box">
            <p>Deaths: {this.state.data.deaths}</p> 
          </div>
      </div>
    );
  }
}

export default Dashboard;
