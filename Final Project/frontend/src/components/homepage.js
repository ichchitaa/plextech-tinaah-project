import React from "react";
import "../styles/homepage.css";
// import { Typography } from "@materiial-ui/core";
// import { LocalDiningIcon } from "@mui/icons-material/LocalDining";

class Cafe3menu extends React.Component {
  render() {
    return (
      <div className="clark">
        <p> Menu items today:</p>
      </div>
    );
  }
}

class Cafe3Average extends React.Component {
  render() {
    return (
      <div className="clark">
        <p> Average rating:</p>
      </div>
    );
  }
}

class Croadsmenu extends React.Component {
  render() {
    return (
      <div className="clark">
        <p> Menu items today:</p>
      </div>
    );
  }
}

class CroadsAverage extends React.Component {
  render() {
    return (
      <div className="clark">
        <p> Average rating:</p>
      </div>
    );
  }
}

class Foothillmenu extends React.Component {
  render() {
    return (
      <div className="clark">
        <p> Menu items today:</p>
      </div>
    );
  }
}

class FoothillAverage extends React.Component {
  render() {
    return (
      <div className="clark">
        <p> Average rating: </p>
      </div>
    );
  }
}

class Clarkmenu extends React.Component {
  render() {
    return (
      <div className="clark">
        <p> Menu items today:</p>
      </div>
    );
  }
}

class ClarkAverage extends React.Component {
  render() {
    return (
      <div className="clark">
        <p> Average rating: </p>
      </div>
    );
  }
}

class Cafe3Title extends React.Component {
  render() {
    return (
      <div className="title">
        <p>Cafe 3</p>
      </div>
    );
  }
}

class CroadsTitle extends React.Component {
  render() {
    return (
      <div className="title">
        <p>Crossroads</p>
      </div>
    );
  }
}

class FoothillTitle extends React.Component {
  render() {
    return (
      <div className="title">
        <p>Foothill</p>
      </div>
    );
  }
}

class ClarkTitle extends React.Component {
  render() {
    return (
      <div className="title">
        <p>Clark Kerr</p>
      </div>
    );
  }
}

class HomePage extends React.Component {
  Cafe3_2 = () => {
    return <Cafe3Average />;
  };
  Cafe3_1 = () => {
    return <Cafe3menu />;
  };
  Croads_1 = () => {
    return <Croadsmenu />;
  };
  Croads_2 = () => {
    return <CroadsAverage />;
  };
  Foothill_1 = () => {
    return <Foothillmenu />;
  };
  Foothill_2 = () => {
    return <FoothillAverage />;
  };
  Clark_1 = () => {
    return <Clarkmenu />;
  };
  Clark_2 = () => {
    return <ClarkAverage />;
  };
  CafeTitle = () => {
    return <Cafe3Title />;
  };
  CroadsTitle = () => {
    return <CroadsTitle />;
  };
  FoothillTitle = () => {
    return <FoothillTitle />;
  };
  ClarkTitle = () => {
    return <ClarkTitle />;
  };
  button1 = () => {
    return <button id="button">Add a review!</button>;
  };
  render() {
    const overhead = "Cafe 3\n";
    const linespace = " ";
    const welcome = "Welcome to Cal Eats!";
    return (
      <div className="overall">
        {" "}
        {welcome}
        <div className="title">{overhead}</div>
        <div className="space">{linespace}</div>
        <div className="box">
          {this.Cafe3_2()}
          {this.Cafe3_1()}
          {this.CroadsTitle()}
          {this.Croads_2()}
          {this.Croads_1()}
          {this.FoothillTitle()}
          {this.Foothill_2()}
          {this.Foothill_1()}

          {this.ClarkTitle()}
          {this.Clark_2()}
          {this.Clark_1()}
          {this.button1()}
        </div>
      </div>
    );
  }
}

export default HomePage;
