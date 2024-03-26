// import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: null,
    is_authenticated: false,
  }),

  actions: {
    setUser(user) {
      this.user = user;
    },
    setAuth() {
      this.is_authenticated = true;
    },
    setTokens(token) {
      this.token = token;
    },

    clearUser() {
      this.user = null;
    },
    clearAuth() {
      this.is_authenticated = false;
    },
    clearTokens() {
      this.token = null;
    },

    isAuthenticated() {
      return this.token !== null;
    },
  },
});