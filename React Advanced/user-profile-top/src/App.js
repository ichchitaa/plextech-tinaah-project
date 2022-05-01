import './App.css';
import React, { Component } from 'react';
import babydev from './babydev.jpg';
import plitterlogo from './plitterlogo.png'; 

function App() {
  return (
    <div className="userprofile">
      <img className= "babydev" src={babydev} alt="devtheballer"></img>
      <div className="userinfo">
        <h2 className="username">
          <p>devtheballer</p>
        <button className="followButton">Follow</button>
        <button className="messageButton">Message</button>
        </h2>
      </div>
      <div className = "followers">
        <h3 className="followerCount">
          <p> 3 followers</p>
        </h3>
      </div>
      <div className="pleets">
        <h3 className="pleetCount">
          <p>420 pleets</p>
        </h3>
      </div>
      <div className="following">
        <h3 className="followingcount">
          <p>183 following</p>
        </h3>
      </div>
      <h5 className="locatedIn">
          <p>LOCATED IN:</p>
      </h5>
      <div className="location">
        <h3>
          <p>Oakland, CA</p>
        </h3>
      </div>
      <header className="userbio">
        <p>Hi! My name is Dev Bali, the absolute mf baller. I love to ponder about the meaning of life and free will in my spare time, so that is what most of my pleets are about. I'm bilingual and often switch to Hindi mid-sentence so fair warning about that. Hope you enjoy!</p>
      </header>
      <img className="plitterlogo" src={plitterlogo} alt="Plitter Logo"></img>
      <a className="plug" href="https://www.instagram.com/devbali02/?hl=en">Follow Me On Instagram!</a>
    </div>
  );
}

export default App;
