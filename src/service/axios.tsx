import axios from "axios";
import { getToken } from "./localstorage";



const http = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
});

http.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default http;
