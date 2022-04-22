import React from "react";
import ReactDOM from "react-dom/client";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "this is data",
    };
  }
  componentDidMount() {
    // Simple GET request using fetch
    fetch("http://localhost:5001/pleets", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        this.setState({ data: "this is new data" });
        console.log(response);
      })
      .catch((error) => console.log(error));
  }
  //   componentWillMount() {
  //     // Simple GET request using fetch
  //     fetch("http://localhost:5001/pleets", { method: "GET", mode: "no-cors" })
  //       .then((response) => {
  //         this.setState({ data: "this is new data" });
  //         console.log(response);
  //       })
  //       .catch((error) => console.log(error));
  //   }

  render() {
    return (
      <div>
        <h1>this is homepage</h1>
        <div>{this.state.data}</div>
      </div>
    );
  }
}

export default HomePage;
