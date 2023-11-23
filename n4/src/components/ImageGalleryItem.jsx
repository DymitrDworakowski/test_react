import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ images, openModal }) => (
  <ul className="gallery">
    {images.map(({ id, webformatURL, tags,}) => (
      <li key={id} className="gallery-item" onClick={() => openModal(id)}>
        <img src={webformatURL} alt={tags} className="gallery-image" />
      </li>
    ))}
  </ul>
);

export default ImageGalleryItem;