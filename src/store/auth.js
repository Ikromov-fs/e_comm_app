import { defineStore } from 'pinia';

export const auth = defineStore("user", {
  state: () => ({
    isRegister: false,
  }),
  actions: {},
});
