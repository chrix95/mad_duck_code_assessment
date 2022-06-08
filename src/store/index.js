import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false,
  },
  getters: {},
  mutations: {
    SET_LOADING_STATE(state, type) {
      state.loading = type;
    },
  },
  actions: {
    setLoading({ commit }, type) {
      commit("SET_LOADING_STATE", type);
    },
  },
  modules: {
  }
})
