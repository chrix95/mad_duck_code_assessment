import Api from "@/services/Api";

export default {
  getCity(city, params) {
    return Api().get(`/services/timeline/${city}/today`, { params });
  },
  getNext3DaysTemperature({ address, startDate, endDate, urlParams }) {
    return Api().get(`/services/timeline/${address}/${startDate}/${endDate}`, { params: urlParams });
  },
};