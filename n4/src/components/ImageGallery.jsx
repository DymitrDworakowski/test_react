import React, { Component } from 'react';
import Modal from './Modal';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageId: null,
    };
  }

  openModal = (id) => {
    this.setState({ selectedImageId: id });
  };

  closeModal = () => {
    this.setState({ selectedImageId: null });
  };

  render() {
    const { images } = this.props;
    const { selectedImageId } = this.state;

    return (
      <ul>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <li key={id} onClick={() => this.openModal(id)}>
            <img src={webformatURL} alt={tags} />
          </li>
        ))}
        {selectedImageId && (
          <Modal
            largeImageURL={images.find((image) => image.id === selectedImageId)?.largeImageURL}
            onClose={this.closeModal}
          />
        )}
      </ul> 
    );
  }
}

export default ImageGallery;
