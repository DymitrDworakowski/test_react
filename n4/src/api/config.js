import axios from "axios";
import API_URL from "../constans/api";

const HTTPClient = axios.create({
  baseURL: "https://pixabay.com/api/",
});

export default HTTPClient;
