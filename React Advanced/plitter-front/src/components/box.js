import "../css/box.css";
import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import photo from "../image/photo.jpeg";
import video from "../image/video.jpeg";
import article from "../image/writearticle.jpeg";

class Textbox extends React.Component {
  render() {
    return (
      // <input type="text" id="lname" name="lname"><br></br></input>
      <form action="/action_page.php">
        {/* <label for="fname">First name:</label> */}
        <input type="text" id="fname" name="fname"></input>
        <p> </p>
      </form>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      // <input type="text" id="lname" name="lname"><br></br></input>
      <form action="/action_page.php">
        {/* <label for="fname">First name:</label>
         <input type="text" id="fname" name="fname"></input>
         <label for="lname">Last name:</label>
         <input type="text" id="lname" name="lname"></input> */}
        <input type="submit" id="iddd" value="Post!"></input>
      </form>
    );
  }
}

class Icon1 extends React.Component {
  render() {
    return (
      // <button className="icon1">button1</button>
      // <button className="icon2">button2</button>
      <div className="icons">
        <img className="photo1" src={photo} alt="logo1" />
        <p id="p1">Add a photo</p>
        <img className="video1" src={video} alt="logo2" />
        <p id="p2">Add a video</p>
        <img className="article1" src={article} alt="logo3" />
        <p id="p3">Write an article</p>
      </div>
    );
  }
}

class Box extends React.Component {
  theTextbox = () => {
    return <Textbox />;
  };
  theSquare = () => {
    return <Square />;
  };
  theIcon1 = () => {
    return <Icon1 />;
  };
  render() {
    const overhead = "Type your thoughts:\n";
    const linespace = " ";
    return (
      <div className="overall">
        <div className="title">{overhead}</div>
        <div className="space">{linespace}</div>
        <div className="box">
          {this.theTextbox()}
          {this.theIcon1()}
          {this.theSquare()}
        </div>
      </div>
    );
  }
}

export default Box;
