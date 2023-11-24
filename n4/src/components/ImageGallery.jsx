import React, { Component } from "react";

import "./ImageGallery.css";
import ImageGalleryItem from "./ImageGalleryItem";

class ImageGallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <div className="imgGal">
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        ))}
      </div>
    );
  }
}

export default ImageGallery;
