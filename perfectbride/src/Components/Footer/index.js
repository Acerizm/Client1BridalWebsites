import React,{Component} from "react";
import "./index.css";
import * as TEXT from "./text.js";

class Footer extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div id="FooterContainer">
        <span className="texts" style={{marginLeft: "15%",width:"200px"}}>{TEXT.text1}</span>
        <span className="texts" style={{marginLeft: "5%",width:"400px"}}>{TEXT.text2}</span>
        <span className="texts" style={{marginLeft: "5%"}}>Email:</span>
        <span className="texts" style={{marginLeft: "1%",marginTop:"15px",width:"400px"}}>{TEXT.text3}</span>
      </div>
    )
  }
}

export default Footer;