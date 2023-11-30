import  { useState } from "react";
import "./ImageGalleryItem.css";
import Modal from "./Modal";

const  ImageGalleryItem =({ webformatURL, tags, largeImageURL })=> {

  const [statusModal, setstatusModal] = useState(false);
 

  const openModal = () => {
    setstatusModal(true);
  };

  const closeModal = () => {
    setstatusModal(false); 
  };


    return (
      <ul className="gallery">
        <li className="gallery-item" onClick={openModal}>
          <img src={webformatURL} alt={tags} className="gallery-image" />
        </li>

        {statusModal && (
          <Modal
            openModal={statusModal}
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={closeModal}
          />
        )}
      </ul>
    );
  
}

export default ImageGalleryItem;
