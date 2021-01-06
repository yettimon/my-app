import "./Home.scss";
import React from "react";
import logo from './../../logo.svg';

function template() {
  return (
    <div className="home">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home
        </p>
        <p>Test 1st react-based SPA</p>
    </div>
  );
};

export default template;
