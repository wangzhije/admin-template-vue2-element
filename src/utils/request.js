import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});
// request interceptor
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);
// response interceptor
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);
export default service;
