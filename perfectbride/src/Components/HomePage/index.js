import React,{Component} from "react";
import "./index.css";
import NavBar from "../Navbar/index.js";
import * as TEXT from "./text.js";

//import window height here
import {useWindowWidth, useWindowHeight} from "../ResponsiveComponent/index.js";
import {minDesktopWidth,minMobileWidth,minTabletWidth} from "../ResponsiveComponent/index.js";

const HomePage = (props) => {

  let currentWindowWidth = useWindowWidth();
  let currentHomePage;
  
  if (currentWindowWidth >= minDesktopWidth){
    currentHomePage = <DesktopHomePage/>;
  }
  
  else if (currentWindowWidth >= minTabletWidth && currentWindowWidth < minDesktopWidth){
    currentHomePage = <TabletHomePage/>
  }
  
  //for testing purposes
  else{
    currentHomePage = <DesktopHomePage/>;
  }
  

  return currentHomePage
}

const DesktopHomePage = (props) => {
  //use react hooks here
  return (
     <div id="HomePage">
      <div id="WeddingPhoto"></div>
      <div id="TextArea">
        <span id="PerfectBrideTitle">{TEXT.PerfectBrideTitle}</span>
        <span id="Intro1">{TEXT.Intro1}</span>
        <span id="Intro2">{TEXT.Intro2}</span>
      </div>
      <div id="OtherImagesArea">
        <div id="OtherImages1"></div>
        <div id="OtherImages2"></div>
        <div id="OtherImages3"></div>
      </div>
    </div>
    )
}

const TabletHomePage = (props) => {
  return (
    <div id="HomePage">
      <div id="FirstContentContainer">
        <div id="WeddingPhoto"></div>
        <div id="TextArea">
          <span id="PerfectBrideTitle">{TEXT.PerfectBrideTitle}</span>
          <span id="Intro1">{TEXT.Intro1}</span>
          <span id="Intro2">{TEXT.Intro2}</span>
        </div>
      </div>
      <div id="OtherImagesArea">
        <div id="OtherImages1"></div>
        <div id="OtherImages2"></div>
        <div id="OtherImages3"></div>
      </div>
    </div>
    )
}

export default HomePage
