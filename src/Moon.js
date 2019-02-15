import React, { Component } from "react";
import "./Moon.sass";

class Moon extends Component {
  render() {
    return (
      <div className="Moon">
        <div className="Moon-innershadow" />
        <div className="Moon-crater Moon-crater--1">
          <div className="cratershadow" />
        </div>
        <div className="Moon-crater Moon-crater--2">
          <div className="cratershadow" />
        </div>
        <div className="Moon-crater Moon-crater--3">
          <div className="cratershadow" />
        </div>
        <div className="Moon-crater Moon-crater--4">
          <div className="cratershadow" />
        </div>
        <div className="Moon-crater Moon-crater--5">
          <div className="cratershadow" />
        </div>
        <div className="Moon-crater Moon-crater--6">
          <div className="cratershadow" />
        </div>
      </div>
    );
  }
}

export default Moon;
