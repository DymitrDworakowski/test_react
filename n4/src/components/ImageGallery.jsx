const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, previewURL, user }) => (
        <li key={id}>
          <img src={previewURL} alt="" />
          <p>{user}</p>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
