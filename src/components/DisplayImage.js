import React, { Component } from "react";
import defaultAvi from "../components/assets/images/default-av.svg"

class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.currentImg
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
      this.props.setImg(img);
    }
  };

  render() {
    return (
      <div>
        <div>
          <div className="mx-auto"> 
            <img src={this.state.image || this.props.currentImg} 
            style={{width: "150px", height: "150px", backgroundImage: `url(${defaultAvi})`, borderRadius: "50%", margin: "20px"}} />
            <h5>Select A Profile Image</h5>
            <input 
            type="file" 
            name="UserImage" 
            onChange={this.onImageChange} />
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayImage;