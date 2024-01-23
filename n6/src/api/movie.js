
import API_URL from "../constans/api";


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
    return response.data.results;
    
  } catch (error) {
    console.error(error);
    throw error; 
  }
};


