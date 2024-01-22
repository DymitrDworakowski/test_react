import HTTPClient from "./config";
import API_URL from "../constans/api";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWNmOWQ1M2E1ZTQ0NGUzYjJlMzYzYWQxMzAxNDdiNyIsInN1YiI6IjY0YWZmNDNlZDY1OTBiMDExZWVjNDhlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3poqFkTT4yjsSzp9W870aZK_S-atAW22xuBuk5G4Wsg",
//   },
// };

// export const fetchMovies = () => {
//   return HTTPClient.get(`movie/popular?language=en-US&page=1`, options)
//     .then((response) => {
//       console.log(response);
//       return response.data.hits;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

import axios from "axios";

const options = {
  method: "GET",
  url: `${API_URL}movie/popular`,
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWNmOWQ1M2E1ZTQ0NGUzYjJlMzYzYWQxMzAxNDdiNyIsInN1YiI6IjY0YWZmNDNlZDY1OTBiMDExZWVjNDhlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3poqFkTT4yjsSzp9W870aZK_S-atAW22xuBuk5G4Wsg",
  },
};

export const fetchMovies = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Propagate the error so the calling code can handle it
  }
};

// Using async/await requires the calling function to be asynchronous
const fetchData = async () => {
  try {
    const movies = await fetchMovies();
    console.log(movies);
  } catch (error) {
    console.error(error);
  }
};

fetchData(); // Call the async function
console.log(fetchData());
