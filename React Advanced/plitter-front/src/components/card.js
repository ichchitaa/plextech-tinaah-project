import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

class CardHolder extends React.Component {
  render() {
    return (
      <div className="App">
        <Card style={{ width: "18rem", backgroundColor: "#ADD8E6" }}>
          <Card.Body>
            <Card.Title>Pleet Card</Card.Title>
            <Card.Text>Name text Date:00-00-00</Card.Text>
            <Button variant="primary">Delete</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CardHolder;
