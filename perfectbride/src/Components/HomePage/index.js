import React,{Component} from "react";
import "./index.css";
import NavBar from "../Navbar/index.js";

class HomePage extends Component {
  constructor(props){
    super(props);

    this.state= {};
  }

  render(){
    return (
      <div id="HomePage">
        <div id="WeddingPhoto"></div>
      </div>
    )
  }
}

export default HomePage