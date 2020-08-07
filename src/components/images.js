import React, { Component } from "react";

import ImageComponent from "./image";
import searchIcon from "./searchIcon.png";

class Images extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      pageNum: 1,
      filteredImages: [],
    };
  }

  // loaD more action
  handleLoadmore = () => {
    this.setState((prevState) => {
      return {
        images: prevState.images,
        filteredImages: [],
        pageNum: prevState.pageNum + 1,
      };
    });
  };

  // handling search input
  handleOnSearch = (e) => {
    const val = e.target.value;
    this.setState((prevState) => {
      const filtered =
        val.length &&
        prevState.images.filter(
          (img) => img.alt_description && img.alt_description.includes(val)
        );
      return {
        pageNum: prevState.pageNum,
        filteredImages: filtered,
        images: prevState.images,
      };
    });
  };

  // fetch function
  fetchImages = () => {
    fetch(
      `https://api.unsplash.com/photos?per_page=9&&page=${this.state.pageNum}`,
      {
        headers: {
          Authorization: `Client-ID QACfo5WHhhR8Dx0zqAqZjoNXfVeTdcE_VU7vHdbNjno`,
        },
      }
    )
      .then((response) => response.json())
      .then((apiImgs) =>
        this.setState((prevState) => {
          return {
            images: apiImgs,
            pageNum: prevState.pageNum,
            filteredImages: [],
          };
        })
      );
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageNum !== this.state.pageNum) {
      this.fetchImages();
    }
  }

  render() {
    return (
      <>
        <div>
          <div
            style={{
              position: "relative",
              padding: "0 0 0 20px",
              direction: "ltr",
              width: "60%",
              margin: "1% 15% 1% 15%",
            }}
          >
            <input
              className="search-box"
              type="text"
              placeholder="  Search for Images here..."
              onChange={(e) => this.handleOnSearch(e)}
            />
            <img className="searchIcon" src={searchIcon} alt="search" />
          </div>
          <div className="container">
            {!this.state.filteredImages.length
              ? this.state.images.map((img) => (
                  <ImageComponent
                    key={img.id}
                    imageURL={img.urls.small}
                    modalImageURL={img.urls.small}
                    imageDescription={img.alt_description}
                  />
                ))
              : this.state.filteredImages.map((img) => (
                  <ImageComponent
                    key={img.id}
                    imageURL={img.urls.small}
                    imageDescription={img.alt_description}
                    downloadURL={img.links.download}
                  />
                ))}
          </div>
        </div>
        <div className="loadmorediv">
          <button className="btnstyle" onClick={this.handleLoadmore}>
            Load more
          </button>
        </div>
      </>
    );
  }
}

export default Images;
