import React, { Component } from "react";
import "./ImageGalleryItem.css";
import Modal from "./Modal";

class ImageGalleryItem extends Component {
  state = {
    openModal: false,
  };

  openModal = () => {
    this.setState({ openModal: true });
  };

  closeModal = (e) => {
    this.setState({ openModal: false }); // Закрываем модальное окно при клике на фон
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { openModal } = this.state;
    return (
      <ul className="gallery">
        <li className="gallery-item" onClick={this.openModal}>
          <img src={webformatURL} alt={tags} className="gallery-image" />
        </li>

        {openModal && (
          <Modal
            openModal={openModal}
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.closeModal}
          />
        )}
      </ul>
    );
  }
}

export default ImageGalleryItem;

// const ImageGalleryItem = ({ images, openModal }) => (
//   <ul className="gallery">
//     {images.map(({ id, webformatURL, tags,}) => (
//       <li key={id} className="gallery-item" >
//         <img src={webformatURL} alt={tags} className="gallery-image" />
//       </li>
//     ))}
//     {openModal && (
//       <Modal
//         largeImageURL={images.find((image) => image.id === openModal)?.largeImageURL}
//         onClose={this.closeModal}
//       />
//     )}
//   </ul>
// );
