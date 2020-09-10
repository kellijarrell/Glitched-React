import React, { Component } from "react";

class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <img src={this.state.image} />
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