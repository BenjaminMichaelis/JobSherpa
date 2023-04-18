import { createStore } from "vuex";
import UserDataService from "../services/UserDataService";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    async loadUserProfile({ commit }, userId) {
      try {
        const response = await UserDataService.getUserProfile(userId);
        commit("setUser", response.data);
      } catch (error) {
        console.error("Error loading user profile:", error);
      }
    },
  },
  getters: {
    user: (state) => state.user,
  },
});
