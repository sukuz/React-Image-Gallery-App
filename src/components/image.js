// import React from "react";

import React, { Component } from "react";
import Imagemodal from "./imageModal";

class ImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleImageOnclick = () => {
    this.setState((prevState) => {
      return { showModal: !prevState.showModal };
    });
  };
  render() {
    return (
      <>
        <div
          style={{
            background: `url(${this.props.imageURL})`,
            backgroundSize: "cover",
          }}
          onClick={this.handleImageOnclick}
        ></div>
        {this.state.showModal && (
          <Imagemodal
            imageURL={this.props.modalImageURL}
            imageDescription={this.props.imageDescription}
            downloadURL={this.props.downloadURL}
            handleImageOnclick={this.handleImageOnclick}
          />
        )}
      </>
    );
  }
}
export default ImageComponent;
