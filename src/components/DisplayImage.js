import React, { Component } from "react";

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
          <div>
            <img src={this.state.image || this.props.currentImg} style={{width: "200px", height: "200px", backgroundImage: "url(https://placehold.it/200x200)"}}/>
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