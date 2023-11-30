import "./App.css";
import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import { Component, useState } from "react";
import { fetchImg } from "./api/img";
import Loader from "./components/Loader";
import Button from "./components/Button";

const App = () => {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMoreImages, setHasMoreImages] = useState(false);

 
  
useEffect((prevProps, prevState) => {
    if (
      prevState.page !== page ||
      prevState.search !== search 
    ) { 
     
      if (this.state.search.trim() !== "") {
        this.fetchImages();
      }
    }
  
  }, [userData]);




  const handleClick = () => {
    setPage((prevState) => ( prevState.page + 1,
    ));
  };

  const onSubmit = async (evt) => {
    const form = evt.currentTarget;
    const search = form.elements.search.value;
    if (search === "") {
      alert("Input is empty");
      return
    }
    evt.preventDefault();
    this.setState({ page: 1, search, images: [] }); // Скидаємо сторінку та зберігаємо значення пошуку
 

    form.reset();
  };

fetchImages = async () => {
  

  try {
    this.setState({ isLoading: true });
    const response = await fetchImg({ search, page });
  if (response.length > 0) {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response],
          hasMoreImages: true,
        }));
      } else {
        this.setState({ hasMoreImages: false });
      }
    } catch (error) {
      this.setState({ error, hasMoreImages: false });
    } finally {
      this.setState({ isLoading: false });
    }
};

   
    return (
      <div className="App">
        <Searchbar onSubmit={onSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader />}
        {images !== null && <ImageGallery images={images} />}
        {hasMoreImages ? (
  <Button onClick={handleClick} />
) : (
  <p>No more images to load.</p>
)}
      </div>
    );
  
}

export default App;
