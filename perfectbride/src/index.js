import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import * as ROUTES from "./Routes/index.js";
import HomePage from "./Components/HomePage/index.js";
import NavBar from "./Components/Navbar/index.js";

ReactDOM.render(
  <Router>
    <div id="perfectBride">
      <NavBar/>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePage}></Route>
      <Route exact path="/" component={HomePage}></Route>
    </div>
  </Router>
  , document.getElementById('root'));
