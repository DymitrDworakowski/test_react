import "./App.css";
import Searchbar from "./components/Searchbar";
import { Component } from "react";

class App extends Component {
  onSubmit = (evt) => {
    console.log(evt.target.value);
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
