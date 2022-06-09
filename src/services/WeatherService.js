import Api from "@/services/Api";

export default {
  addCity(params) {
    return Api().get("/current", { params });
  },
  getCity(city, params) {
    return Api().get(`/services/timeline/${city}`, { params });
  },
  getNext3DaysTemperature({ address, startDate, endDate, urlParams }) {
    return Api().get(`/services/timeline/${address}/${startDate}/${endDate}`, { params: urlParams });
  },
};