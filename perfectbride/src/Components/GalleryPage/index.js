import React,{Component} from "react";
//import css here
import "./index.css";
import * as Images from "../../images/index.js";

const imageArray = [
  Images.Image1,
  Images.Image2,
  Images.Image3,
  Images.Image4,
  Images.Image5,
];

class GalleryPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentImageSelected: 0,
      currentImage: imageArray[0],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(prop){
      // this.setState(state =>)
  }

  render(){
    let currentImage = this.state.currentImage;
    return(
      <div id="GalleryPageMainContainer">
        <img src={currentImage} id="MainImageSelected" />
        <div id="CurrentImageTitle"></div>
        <div id="AllImagesRow">
          <img src={Images.Image1} className="AllImages" alt="Image 1" />
          <img src={Images.Image2} className="AllImages" alt="Image 2" />
          <img src={Images.Image3} className="AllImages" alt="Image 3" />
          <img src={Images.Image4} className="AllImages" alt="Image 4" />
          <img src={Images.Image5} className="AllImages" alt="Image 5" />
        </div>
      </div>
    )
  }
}

export default GalleryPage;