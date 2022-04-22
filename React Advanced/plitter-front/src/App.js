import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/homepage.js";
import Box from "./components/box.js";
import Profile from "./components/profile.js";
import Card from "./components/card.js";

function App() {
  return (
    <div>
      <Profile />
      <Box />
      <Card />
    </div>
  );
}

export default App;
