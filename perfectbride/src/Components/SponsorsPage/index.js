import React,{Component} from "react";
import "./index.css";
import * as TEXT from "./text.js";

class SponsorsPage extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div id="SponsorsPageContainer">
        <span id="SponsorTitle">{TEXT.SponsorTitle}</span>
        <div id="Sponsor1">
          <div className="SponsorImages" id="Sponsor1Image"></div>
          <div id="SponsorTextArea">
            <span className="SponsorsText" className="FirstSponsorText">{TEXT.Sponsor1Chi}</span>
            <span className="SponsorsText" className="SecondSponsorText">{TEXT.Sponsor1Name}</span>
            <span className="SponsorsText" className="ThirdSponsorText">{TEXT.Sponsor1Desc}</span>
          </div>
        </div>
        <div id="Sponsor2">
          <div id="SponsorTextArea">
            <span className="SponsorsText" className="FirstSponsorText">{TEXT.Sponsor2Chi}</span>
            <span className="SponsorsText" className="SecondSponsorText">{TEXT.Sponsor2Name}</span>
            <span className="SponsorsText" className="ThirdSponsorText">{TEXT.Sponsor2Desc}</span>
          </div>
          <div className="SponsorImages" id="Sponsor2Image"></div>
        </div>
        <div id="CollectiveSponsorDesc">
          <div id="CollectiveSponsorTextBox">
            <div id="InnerCollectiveSponsorText">
            {TEXT.CollectiveSponsorText}
            </div>
          </div>   
        </div>
      </div>
    )
  }
}

export default SponsorsPage;