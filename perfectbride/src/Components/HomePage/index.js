import React,{Component} from "react";
import "./index.css";
import NavBar from "../Navbar/index.js";
import * as TEXT from "./text.js";

class HomePage extends Component {
  constructor(props){
    super(props);

    this.state= {};
  }

  render(){
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
}

export default HomePage