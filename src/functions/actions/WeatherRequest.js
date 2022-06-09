import store from "../../store";
import WeatherService from "@/services/WeatherService";
import globalFunc from "@/functions/globalFunc";

export default {
  getNext3DaysTemperature({ id, ...payload }) {
    store.dispatch("setLoading", true);
    const response = WeatherService.getNext3DaysTemperature(payload)
      .then((result) => {
        store.dispatch("updateCity", { days: result.data.days, id });
        return { status: true };
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
  getCity(city, urlParams) {
    store.dispatch("setLoading", true);
    const response = WeatherService.getCity(city, urlParams)
      .then((result) => {
        store.dispatch("setCities", { ...result.data, id: globalFunc.generateUuid() });
        return { status: true };
      })
      .catch((err) => {
        console.log(err);
        if (err?.response === undefined) {
          return { status: false, message: 'Oops! took long to get a response' }
        } else {
          return { status: false, message: err?.response?.data }
        }
      })
      .finally(() => {
        store.dispatch("setLoading", false);
      });
      return response
  },
};
