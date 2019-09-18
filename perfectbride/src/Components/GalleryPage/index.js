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
      currentImage: imageArray[0],
      currentTitle: "test",
      currentImageIndex: 0,
      numOfImages: imageArray.length,
    };
  }

  render(){
    let currentImage = this.state.currentImage;
    let currentTitle = this.state.currentTitle;
    let currentImageIndex = this.state.currentImageIndex;
    let numOfImages = this.state.numOfImages;
    return(
      <div id="GalleryPageMainContainer">
        <div id="MainImageContainer">
          {/* Heavy logic here */}
          <div id="prev" onClick={()=> {
            if (currentImageIndex <= 0){
              this.setState({
                currentImage: imageArray[numOfImages - 1],
                currentImageIndex: numOfImages - 1,
              })
            }
            else{
              this.setState({
                currentImage: imageArray[currentImageIndex - 1],
                currentImageIndex: currentImageIndex - 1,
              })
            }
          }}>❮
          </div>
          <div id="next" onClick={()=> {
            if (currentImageIndex >= numOfImages - 1){
              this.setState({
                currentImage: imageArray[0],
                currentImageIndex: 0,
              })
            }
            else{
              this.setState({
                currentImage: imageArray[currentImageIndex+1],
                currentImageIndex: currentImageIndex + 1,
              })
            }
          }}>❯
          </div>
           {/* End of Heavy logic here */}
          <img src={currentImage} id="MainImageSelected" />
        </div>
        <div id="CurrentImageTitle"><span>{currentTitle}</span></div>
        <div id="AllImagesRow">
          <img src={Images.Image1} className="AllImages" alt="Image 1" 
          onClick={() => this.setState({currentImage: imageArray[0],currentTitle: "test1",currentImageIndex:0})}
          style={{opacity: currentImageIndex == 0 ? "1" : "0.6"}}
          />
          <img src={Images.Image2} className="AllImages" alt="Image 2" onClick={() => this.setState({currentImage: imageArray[1],currentTitle: "test2",currentImageIndex:1})}/>
          <img src={Images.Image3} className="AllImages" alt="Image 3" onClick={() => this.setState({currentImage: imageArray[2],currentTitle: "test3",currentImageIndex:2})}/>
          <img src={Images.Image4} className="AllImages" alt="Image 4" onClick={() => this.setState({currentImage: imageArray[3],currentTitle: "test4",currentImageIndex:3})}/>
          <img src={Images.Image5} className="AllImages" alt="Image 5" onClick={() => this.setState({currentImage: imageArray[4],currentTitle: "test5",currentImageIndex:4})}/>
        </div>
      </div>
    )
  }
}

export default GalleryPage;