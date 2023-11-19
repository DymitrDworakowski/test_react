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
    console.log(search);
    // this.props.onSubmit({ search });
    form.reset();
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const images = await fetchImg();
    console.log(images);
  }

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <div>
          isLoading ? <p>Loading...</p> :
          <ImageGallery />
        </div>
      </div>
    );
  }
}

export default App;
