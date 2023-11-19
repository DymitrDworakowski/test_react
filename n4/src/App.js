import "./App.css";
import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import { Component } from "react";
import { fetchImg } from "./api/img";

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const search = form.elements.search.value;

    // this.props.onSubmit({ search });
    form.reset();
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const response = await fetchImg();
    console.log(response);
    this.setState({ images: response });
  }

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery images={images} />
      </div>
    );
  }
}

export default App;
