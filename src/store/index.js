import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false,
    cities: [],
  },
  getters: {
    getCityCount(state) {
      return state.cities.length;
    }
  },
  mutations: {
    SET_LOADING_STATE(state, type) {
      state.loading = type;
    },
    SET_EXISTING_CITIES(state, cities) {
      state.cities = cities;
    },
    SET_CITIES(state, city) {
      state.cities = [...state.cities, city];
      localStorage.setItem('cities', JSON.stringify(state.cities));
    },
  },
  actions: {
    setLoading({ commit }, type) {
      commit("SET_LOADING_STATE", type);
    },
    setCities({ commit }, payload) {
      commit("SET_CITIES", payload);
    },
    reloadCities({ commit }, payload) {
      commit("SET_EXISTING_CITIES", payload);
    },
  },
  modules: {
  }
})
