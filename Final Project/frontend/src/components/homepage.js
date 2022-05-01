import React from "react";

class HomePage extends React.Component {
  componentDidMount() {
    fetch("http://127.0.0.1:5001")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default HomePage;
