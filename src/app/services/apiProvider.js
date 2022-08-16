import axios from "axios";

export const apiProvider = axios.create({
    baseURL: "https://api.carelobby.flux.i.ng/v1",
  });
  
  apiProvider.interceptors.request.use(
    function (config) {
      if (!config.headers) config.headers = {};
      if (localStorage.getItem("jwt") != null) {
        config.headers["Authorization"] =
          "Bearer " + localStorage.getItem("jwt");
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );