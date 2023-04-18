import { createStore } from "vuex";
import UserDataService from "../services/UserDataService";

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem("user") || "null"),
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
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
    logout({ commit }) {
      commit("setUser", null);
      localStorage.removeItem("user");
    },
  },
  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => !!state.user,
  },
});
