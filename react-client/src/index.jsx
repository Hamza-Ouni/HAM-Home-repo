import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import App from "./components/homepage/App.js";
import Navbar from "./components/rentView/Navbar.jsx";
import CardHouse from "./components/rentView/cardHouse.jsx";
import SelectBox from "./components/rentView/selectBox.jsx";

ReactDOM.render(
  <div>
    <CardHouse />
    <Navbar />
    <SelectBox />
  </div>,
  document.getElementById("app")
);
