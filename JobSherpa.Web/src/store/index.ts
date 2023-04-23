import { createStore } from "vuex";
import UserDataService from "../services/UserDataService";
import { Job } from "@/models/job";

interface RootState {
  user: any;
  jobs: Job[];
}

export default createStore<RootState>({
  state: {
    user: JSON.parse(localStorage.getItem("user") || "null"),
    jobs: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    setJobs(state, jobs) {
      state.jobs = jobs;
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
    async loadUserJobs({ commit }, userId) {
      try {
        const response = await UserDataService.getUserJobs(userId);
        commit("setJobs", response.data);
      } catch (error) {
        console.error("Error loading user jobs:", error);
      }
    },
    logout({ commit }) {
      commit("setUser", null);
      commit("setJobs", []);
      localStorage.removeItem("user");
    },
  },
  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => !!state.user,
    jobs: (state) => state.jobs,
  },
});
