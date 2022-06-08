import store from "@/store";
import WeatherService from "@/services/WeatherService";

export default {
  addCity(credentials) {
    store.dispatch("setLoading", true);
    const response = WeatherService.addCity(credentials)
      .then((result) => {
        console.log(result.data);
        return result.data
      })
      .catch((err) => {
        if (err?.response === undefined) {
          return { status: false, message: 'Oops! took long to get a response' }
        } else {
          return { status: false, message: err?.response?.data?.message }
        }
      })
      .finally(() => {
        store.dispatch("setLoading", false);
      });
      return response
  },
};
