import "./Navigation.scss";
import React from "react";
import Products from '../Products/Products';
import About from '../About/About';
import Home from '../Home/Home';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


function template() {
  return (
    <Router>
      {/* <div className="navbar">
        <div className="nav-link display-zxc">
        <ul className="navbar-nav center">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About us</Link>
          </li>
        </ul>
        </div> */}
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <p className="nav-link nav-bar-anime">
                <Link to="/">Home</Link>
                </p>
            </li>
            <li className="nav-item">
              <p className="nav-link nav-bar-anime"><Link to="/products">Products</Link></p>
            </li>
            <li className="nav-item">
              <p className="nav-link nav-bar-anime"><Link to="/about">A</Link>dd new user</p>
            </li>
          </ul>
        </div>
              </nav>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      {/* </div> */}
    </Router>
  );
};

export default template;
