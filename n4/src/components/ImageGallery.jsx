
import React, { Component } from 'react';
import Modal from './Modal';
import './ImageGallery.css';
import ImageGalleryItem from './ImageGalleryItem';

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
      
      <div className='imgGal'>
        <ImageGalleryItem images={images} openModal={this.openModal} />
          {selectedImageId && (
          <Modal
            largeImageURL={images.find((image) => image.id === selectedImageId)?.largeImageURL}
            onClose={this.closeModal}
          />
        )}
        
      </div> 
     
    );
  }
}

export default ImageGallery;