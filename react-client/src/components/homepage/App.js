import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.png";

import CardExample from "../rentView/cardHouse.jsx";

import Login from "./login.jsx";
import SignUp from "./signup.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              HAM Home
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <img src={logo} /> */}
        <Switch>
          {/* <Route exact path="/" component={CardExample} /> */}
          <Route exact path="/" component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
