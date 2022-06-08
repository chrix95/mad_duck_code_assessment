/* eslint-disable no-undef */
import axios from "axios";

// create a new axios instance
const instance = axios.create({
  baseURL: `${process.env.VUE_APP_ENDPOINT_URL}`
});

// before a request is made start the nprogress
instance.interceptors.request.use(config => {
  // handle sending auth token to the server
  // const token = JSON.parse(sessionStorage.getItem("token"));
  // if (token) {
  //   config.headers['Authorization'] =  `Bearer ${token}`;
  // }
  return config;
});

// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
  return response;
});

export default () => instance;