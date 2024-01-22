import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  return (
    <div className="App">
      <Header />
      <Home
      
      />
    </div>
  );
}

export default App;
