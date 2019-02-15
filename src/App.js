import React, { Component } from "react";
import "./App.sass";
import Moon from "./Moon.js";
import BoatBackground from "./BoatBackground";
import BoatForeground from "./BoatForeground";

class App extends Component {
  state = {
    loaded: false,
    bubble: "start"
  };

  componentDidMount() {
    this.setState({ loaded: true });
  }

  bubble() {
    const { bubble } = this.state;
    switch (bubble) {
      case "about":
        return (
          <div className="talkbubble">
            Jean is a software engineer at Fundera. She is interested in data
            engineering, machine learning, and computer vision. When she is not
            looking at a computer she is climbing, cooking, or attempting to
            play guitar.
          </div>
        );
      case "contact":
        return (
          <div className="talkbubble">
            Want to chat? <a href="mailto:hi@jeanmariano.com">Send a note!</a>
          </div>
        );
      case "misc":
        return (
          <div className="talkbubble">
            Sometimes, Jean draws or design things.
            <br />
            Come back to this section soon to see a sample of her work.
          </div>
        );
      default:
        return (
          <div className="talkbubble">
            Welcome to Jean's website.
            <br />
            Click on a yellow star.
          </div>
        );
    }
  }

  scene() {
    return (
      <div className="App">
        <div className="sky">
          <h1 className="title">jean mariano</h1>
          <div className="moonshadow" />
          <Moon />
          <div className="star star-1">
            <h4
              href="#"
              onClick={() => this.setState({ bubble: "about" })}
              className="star-nav"
            >
              about
            </h4>
          </div>
          <div className="star star-2">
            <h4
              href="#"
              onClick={() => this.setState({ bubble: "contact" })}
              className="star-nav"
            >
              contact
            </h4>
          </div>
          <div className="star star-3">
            <h4
              href="#"
              onClick={() => this.setState({ bubble: "misc" })}
              className="star-nav"
            >
              misc
            </h4>
          </div>
          <div className="star star-4">
            <h4 className="star-nav" href="https://github.com/jeanmariano">
              <a
                href="https://github.com/jeanmariano"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </h4>
          </div>
          <div className="stars small" />
          <div className="stars medium" />
          <div className="stars large" />
        </div>

        <div className="water">
          <div className="wave wave1" />
          <div className="wave wave2" />
          {this.bubble()}
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

  render() {
    const { loaded } = this.state;
    return loaded ? this.scene() : "Loading...";
  }
}

export default App;
