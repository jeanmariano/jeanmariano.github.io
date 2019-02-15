import React, { Component } from "react";
import "./App.css";
import Moon from "./Moon.js";
import BoatBackground from "./BoatBackground";
import BoatForeground from "./BoatForeground";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sky">
          <h1 className="title">jean mariano</h1>
          <div className="moonshadow" />
          <Moon />

          <div className="star star-1" />
          <div className="star star-2" />
          <div className="star star-3" />
          <div className="star star-4" />
          <div className="stars small" />
          <div className="stars medium" />
          <div className="stars large" />
        </div>

        <div className="water">
          <div className="wave wave1" />
          <div className="wave wave2" />
          <div className="talkbubble">
            Welcome to Jean's website.
            <br />
            Want to chat? <a href="mailto:hi@jeanmariano.com">Send a note!</a>
          </div>
          <div className="Boat">
            <div className="BoatBackground">
              <BoatBackground />
            </div>
            <div className="ladder">
              <div className="side side1" />
              <div className="rung rung1" />
              <div className="rung rung2" />
              <div className="rung rung3" />
              <div className="rung rung4" />
              <div className="rung rung5" />
              <div className="rung rung6" />
              <div className="rung rung7" />
              <div className="rung rung8" />
              <div className="rung rung9" />
              <div className="rung rung10" />
              <div className="side side2" />
            </div>
            <img
              className="shibe"
              src={`${process.env.PUBLIC_URL}/shibe.png`}
            />
            <div className="BoatForeground">
              <BoatForeground />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
