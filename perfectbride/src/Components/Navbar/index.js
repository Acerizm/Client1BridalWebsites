import React,{Component} from "react";
import "./index.css";
import {Link} from "react-router-dom";
import * as ROUTES from "../../Routes/index.js";

//import window height here
import {useWindowWidth, useWindowHeight} from "../ResponsiveComponent/index.js";
import {minDesktopWidth,minMobileWidth,minTabletWidth} from "../ResponsiveComponent/index.js";
import MenuIcon from '@material-ui/icons/Menu';

//import material ui stuff here
import { withStyles } from '@material-ui/core/styles';

const NavBar = () => { 
  let currentWindowWidth = useWindowWidth();
  console.log(currentWindowWidth);
  let currentNavbar;
  
  //change navbar according to the width
  if (currentWindowWidth >= minDesktopWidth){
    currentNavbar = <DesktopNavBar/>
  }
  else if(currentWindowWidth > minMobileWidth && currentWindowWidth < minDesktopWidth){
    currentNavbar = <TabletNavbar/>
  }
  else{
    currentNavbar = <MobileNavbar/>
  }
  
    return currentNavbar
  }
  

const HamburgerIcon = withStyles({
  root : {
    height: "100%",
    width: "100%",
  }
})(MenuIcon);

const TabletNavbar = () => {
    return(
      <div id="NavBarContainer">
        <div id="PerfectBrideHeadingContainer">
          <span id="PerfectBrideHeading">Perfect Bride</span>
        </div>
        <div id="HamburgerMenu">
         <HamburgerIcon></HamburgerIcon>
        </div>
      </div>
    )
  }
  
const MobileNavbar = () => {
  return (
    <div></div>
    )
}
  
const DesktopNavBar = () => {
  return (
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

export default NavBar