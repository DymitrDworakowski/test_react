import Loader from "./components/Loader/Loader";

import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";

// Змінені імпорти для React.lazy()
const Home = lazy(() => import("./components/Home/Home"));
const Movies = lazy(() => import("./components/Movies/Movies"));
const MovieDetails = lazy(() =>
  import("./components/MovieDetails/MovieDetails")
);
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
