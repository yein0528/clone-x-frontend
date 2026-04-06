import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    name: "다미장",
    id: 13,
    email: "dm@dm.com",
  }),

  getters: {
    placeholder: (state) => `what's good, ${state.name}?`,
  },
});