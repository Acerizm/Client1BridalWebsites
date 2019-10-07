import React,{Component, useState} from "react";
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
  
  const [currentImageClicked, setCurrentImageClickedIndex] = useState(0);
  //let 0 be the event where the user does not hover the mouse on the images;
  const [Image1Status,setImage1Status] = useState(false);
  const [Image2Status,setImage2Status] = useState(false);
  const [Image3Status,setImage3Status] = useState(false);
  
  const setImageStatus = (imageNum) => {
    let currentStatus;
    if (imageNum == 1){
      if (Image1Status == false){
        currentStatus = true
      }
      else{
        currentStatus = false;
      }
      setImage1Status(currentStatus);
    }
    else if (imageNum == 2){
      let currentStatus;
      if (Image2Status == false){
        currentStatus = true;
      }
      else{
        currentStatus = false;
      }
      setImage2Status(currentStatus);
    }
    else if (imageNum == 3){
      let currentStatus;
      if (Image3Status == false){
        currentStatus = true;
      }
      else{
        currentStatus = false;
      }
      setImage3Status(currentStatus);
    }
  }
  
  
  
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
        <div id="OtherImages1"
          onClick={()=> setImageStatus(1)}
          onMouseLeave={()=> setImageStatus(1)}
          style={{
            gridColumnStart: Image1Status ? "2" : "2",
            gridColumnEnd: Image1Status ? "4" : "2",
            width: Image1Status ? "100%" : "90%"
          }}
        ></div>
        <div id="OtherImages2"></div>
        <div id="OtherImages3"></div>
      </div>
    </div>
    )
}

export default HomePage
