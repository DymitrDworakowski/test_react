import axios from "axios";
import API_URL from "../constans/api";

const HTTPClient = axios.create({
  baseURL: API_URL,
});

export default HTTPClient;
