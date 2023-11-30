import "./ImageGallery.css";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images }) => {
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
};

export default ImageGallery;
