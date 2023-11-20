import "./App.css";
import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import { Component } from "react";
import { fetchImg } from "./api/img";
import Loader from './components/Loader';

class App extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
  };

  // onSubmit =  (evt) => {
  //   evt.preventDefault();
  //   const form = evt.currentTarget;
  //   const search = form.elements.search.value;
  //   this.setState({ images: search });
    
    
  //   form.reset();
  // };

  // async componentDidMount() {
  //   const { images } = this.state;
  //  console.log({ images });

  //   try {
  //   this.setState({ isLoading: true,}); 
  //   const response = await fetchImg({ images });
  //   this.setState({ images: response });
  // } catch (error) {
  //   this.setState({ error });
  // } finally {
  //   this.setState({ isLoading: false });
  // }
  // }

onSubmit = async (evt) => {
  evt.preventDefault();
  const form = evt.currentTarget;
  const search = form.elements.search.value;

  try {
    this.setState({ isLoading: true });
    const response = await fetchImg({ search });
    this.setState({ images: response });
  } catch (error) {
    this.setState({ error });
  } finally {
    this.setState({ isLoading: false });
  }

  form.reset();
};

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader/>}
       {images !== null && images.length > 0 && <ImageGallery images={images}/>}
      </div>
    );
  }
}

export default App;


