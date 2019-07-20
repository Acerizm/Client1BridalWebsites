import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import * as ROUTES from "./Routes/index.js";
import HomePage from "./Components/HomePage/index.js";
import NavBar from "./Components/Navbar/index.js";
import Footer from "./Components/Footer/index.js";
import OrganizerPage from "./Components/OrganizerPage/index.js";

ReactDOM.render(
  <Router>
    <div id="perfectBride">
      <NavBar/>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePage}></Route>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path={ROUTES.ORGANIZER_PAGE} component={OrganizerPage}></Route>
      <Footer/>
    </div>
  </Router>
  , document.getElementById('root'));
