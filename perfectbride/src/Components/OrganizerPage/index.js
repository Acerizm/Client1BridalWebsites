import React,{Component} from "react";
import "./index.css";
import * as TEXT from "./text.js";

class OrganizerPage extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div id="OrganizerPageContainer">
        <div id="black">
          <span id="Chi1">{TEXT.Chi1}</span>
          <span id="Intro">{TEXT.Intro}</span>
          <span id="CompanyName">{TEXT.CompanyName}</span>
          <span id="CompanyDesc">{TEXT.CompnayDesc}</span>
        </div>
        <div id="office">
          <span id="Chi2">{TEXT.Chi2}</span>
        </div>
      </div>
    )
  }
}

export default OrganizerPage;