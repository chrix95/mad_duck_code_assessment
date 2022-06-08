import store from "../../store";
import WeatherService from "@/services/WeatherService";

export default {
  addCity(credentials) {
    store.dispatch("setLoading", true);
    const response = WeatherService.addCity(credentials)
      .then((result) => {
        if (Object.keys(result.data).indexOf("success") == 0) {
          console.log(1)
          const { success, error: { info } } = result.data;
          return { status: success, message: info };
        } else {
          store.dispatch("setCities", result.data);
          console.log(result.data);
          return { status: true };
        }
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
