const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, pageURL, user }) => (
        <li key={id}>
          <a href={pageURL} target="_blank" rel="noreferrer noopener">
            {user}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
