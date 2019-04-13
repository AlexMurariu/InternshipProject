import axios from "axios";
import { getToken } from "./login";

axios.interceptors.request.use(
  function(config) {
    const token = getToken();

    if (token != null) {
      config.headers.Authorization = "Bearer " + token;
    }

    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
