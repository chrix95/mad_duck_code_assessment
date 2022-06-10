/* eslint-disable no-undef */
import axios from "axios";

// create a new axios instance
const instance = axios.create({
  baseURL: `${process.env.VUE_APP_WEATHER_API_URL}`
});

// before a request is made start the nprogress
instance.interceptors.request.use(config => {
  return config;
});

// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
  return response;
});

export default () => instance;