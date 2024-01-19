import "./App.css";
import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import { useState, useEffect, useCallback } from "react";
import { fetchImg } from "./api/img";
import Loader from "./components/Loader";
import Button from "./components/Button";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [hasMoreImages, setHasMoreImages] = useState(false);

  const fetchImages = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetchImg({ search, page });
      if (response.length > 0) {
        setImages((prevImages) => [...prevImages, ...response]);
        setHasMoreImages(true);
      } else {
        setHasMoreImages(false);
      }
    } catch (error) {
      setError(error);
      setHasMoreImages(false);
    } finally {
      setIsLoading(false);
    }
  }, [search, page, setIsLoading, setImages, setHasMoreImages, setError]);

  useEffect(() => {
    if (search.trim() !== "") {
      fetchImages();
    }
  }, [search, page, fetchImages]);

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Код без використання useRef
  // const onSubmit = (evt) => {
  //   const form = evt.currentTarget;
  //   const searchTerm = form.elements.search.value;
  //   if (searchTerm === "") {
  //     alert("Input is empty");
  //     return;
  //   }
  //   evt.preventDefault();
  //   setPage(1);
  //   setSearch(searchTerm);
  //   setImages([]);
  //   form.reset();
  // };

  const onSubmit = (searchTerm) => {
    if (searchTerm.trim() === "") {
      alert("Input is empty");
      return;
    }
    setPage(1);
    setSearch(searchTerm);
    setImages([]);
    
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
};

export default App;
