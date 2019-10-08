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
  
  const [currentImageClicked, setCurrentImageClickedIndex] = useState(1);
  //let 0 be the event where the user does not hover the mouse on the images;
  const [Image1Status,setImage1Status] = useState(true);
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
  
  //need to check if the middle image is going to the right or left
  
  //1. Image 3 is chosen and Image 2 moves to the left
  let currentImage2;
  if (currentImageClicked == 3){
    currentImage2 = <Image2TabletLeft/>
  }
  // 2. Image 1 is clicked and Image 2 moves to the right
  else if(currentImageClicked == 1){
    currentImage2 = <Image2TabletRight/>
    console.log("test");
  }
  
  console.log(currentImageClicked);
  
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
      {
      /*
        <div id="OtherImages1"
          onClick={()=> setImageStatus(1)}
          onMouseLeave={()=> setImageStatus(1)}
          style={{
            gridColumnStart: Image1Status ? "2" : "2",
            gridColumnEnd: Image1Status ? "4" : "2",
            width: Image1Status ? "100%" : "10%"
          }}
        >
          
        </div>
        */
      }
        {/*<div id="OtherImages2"></div>*/}
        {/*currentImage2*/}
        <div id="OtherImages3"
        onClick={()=> setImageStatus(3)}
        onMouseLeave={()=> setImageStatus(3)}
        style={{
          gridColumn: "4",
          width: Image3Status ? "200%" : "20%",
          transition: "0.6s",
          marginLeft: Image3Status ? "-200%" : "0",
          // animationDirection: "right",
        }}
        ></div>
      </div>
    </div>
    )
}

const Image2TabletLeft = (props) => {
  
  return (
    <div id="OtherImages2Left">
    </div>
    )
}

const Image2TabletRight = (props) => {
  
  return (
    <div id="OtherImages2Right">
      
    </div>
    )
}

export default HomePage
