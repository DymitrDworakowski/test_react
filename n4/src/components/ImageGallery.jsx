const ImageGallery = ({ images }) => {
  
  return (
    <ul>
      {images.map(({ id, previewURL, tags, likes } ) => (
         
        <li key={id}>
          <img src={previewURL} alt={tags} />
          <p>Likes: {likes}</p>
        </li>
      ))}
    </ul>
    
  );
 
};

export default ImageGallery;

