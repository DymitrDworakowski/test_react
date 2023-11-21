import "./App.css";
import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import { Component } from "react";
import { fetchImg } from "./api/img";
import Loader from "./components/Loader";
import Button from "./components/Button";

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    // Перевірка, чи сторінка або search змінилися, і виклик fetchImg лише при зміні
    if (
      prevState.page !== this.state.page ||
      prevState.search !== this.state.search ||
      prevState.images !== null // Такий підхід допомагає уникнути непотрібних запитів при наявності старих зображень.
    ) {
      if (this.state.search.trim() !== "") {
        this.fetchImages();
      }
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  onSubmit = async (evt) => {
    const form = evt.currentTarget;
    const search = form.elements.search.value;
    if (search === "") {
      return alert("Input is empty");
    }
    evt.preventDefault();
    this.setState({ page: 1, search, images: []}); // Скидаємо сторінку та зберігаємо значення пошуку
    this.fetchImages(); // Не передаємо search як аргумент, оскільки воно вже встановлено в стані

    form.reset();
  };
fetchImages = async () => {
  const { search, page } = this.state;

  try {
    this.setState({ isLoading: true, images: null }); // Зброєння images на початку запиту
    const response = await fetchImg({ search, page });
    this.setState((prevState) => ({
      images: prevState.images ? [...prevState.images, ...response] : response,
    }));
  } catch (error) {
    this.setState({ error });
  } finally {
    this.setState({ isLoading: false });
  }
};

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader />}
        {images !== null && <ImageGallery images={images} />}
        <Button onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
