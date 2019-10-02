import React,{Component, useState} from "react";
import "./index.css";
import {Link} from "react-router-dom";
import * as ROUTES from "../../Routes/index.js";

//import window height here
import {useWindowWidth, useWindowHeight} from "../ResponsiveComponent/index.js";
import {minDesktopWidth,minMobileWidth,minTabletWidth} from "../ResponsiveComponent/index.js";
import MenuIcon from '@material-ui/icons/Menu';

//import material ui stuff here
import { withStyles } from '@material-ui/core/styles';
import { breakpoints } from "@material-ui/system";

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
   // animation is based on https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav

  const [openSideNavbar, setSideNavbarStatus] = useState(false);
  let SideNavbar;
  //code will only run if called
  const changeSidebarStatus = () => {
    if (openSideNavbar === true){
      setSideNavbarStatus(false);
      SideNavbar = <SideNavbar sideNavbarStatus={openSideNavbar}/>
    }
    else if (openSideNavbar === false){
      setSideNavbarStatus(true);
      SideNavbar = <SideNavbar sideNavbarStatus={false}/>
      debugger;
    }
  }

  let status = openSideNavbar;
  //code will only run for the first time
  if (SideNavbar == null){
    SideNavbar = <SideNavbar sideNavbarStatus={status}/>
  }
  console.log(SideNavbar);
  return(
    <div id="NavBarContainer">
      <div id="PerfectBrideHeadingContainer">
        <span id="PerfectBrideHeading">Perfect Bride</span>
      </div>
      <div id="HamburgerMenu" onClick={() => changeSidebarStatus()}>
        <HamburgerIcon></HamburgerIcon>
      </div>
      {SideNavbar}
    </div>
    )
  }

const SideNavbar = (props) => {
  let currentSideBarStatus;
  if (props.sideNavbarStatus == null){
    currentSideBarStatus = false;
    console.log(currentSideBarStatus);
  }
  else if (props.sideNavbarStatus == true){
    currentSideBarStatus = true;
  }
  else if (props.sideNavbarStatus == false){
    currentSideBarStatus = false;
    console.log(currentSideBarStatus);
  }
  console.log(currentSideBarStatus);
  return(
    <div id="mySidenav" className="sidenav" style={{
      height: "100%",
      position: "fixed",
      zIndex: "1",
      top: 0,
      left: 0,
      backgroundColor: "#111",
      overflowX: "hidden",
      transition: "0.5s",
      paddingTop: "60px",
      width: currentSideBarStatus ? "250px" : "0px"}}>
      <a className="closebtn">&times;</a>
      <a>About</a>
      <a>Services</a>
      <a>Clients</a>
      <a>Contact</a>
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