import React,{Component} from "react";
import "./index.css";
import {Link} from "react-router-dom";
import * as ROUTES from "../../Routes/index.js";

//import window height here
import {useWindowWidth, useWindowHeight} from "../ResponsiveComponent/index.js";

const NavBar = () => { 
  let windowWidth = useWindowWidth();
  console.log(windowWidth);
    return(
      <div id="NavBarContainer">
        <div id="PerfectBrideLogo"></div>
        <div id="NavbarLinksContainer">
          <Link to={ROUTES.HOME_PAGE} className="link"><span className="NavLink">Home</span></Link>
          <Link to={ROUTES.ORGANIZER_PAGE} className="link"><span className="NavLink">Organizer</span></Link>
          <Link to={ROUTES.SPONSORS_PAGE} className="link"><span className="NavLink">Sponsors</span></Link>
          <Link to={ROUTES.GALLERY_PAGE} className="link"><span className="NavLink">Gallery</span></Link>
          <Link to={ROUTES.HOME_PAGE} className="link"><span className="NavLink">Videos</span></Link>
        </div>
      </div>
    )
  }

const MobileNavbar = () => {
    let windowWidth = useWindowWidth();
    return(
      <div id="NavbarContainer">
        <div id="PerfectBrideLogo"></div>
        <div id="HamburgerMenu"></div>
      </div>
    )
  }

export default NavBar