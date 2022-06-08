import Api from "@/services/Api";

export default {
  addCity(params) {
    return Api().get("/current", { params });
  },
};