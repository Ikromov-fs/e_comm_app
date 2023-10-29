import axios from 'axios';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';

const toast = useToast();
export const auth = defineStore("user", {
  state: () => ({
    isLogin: false,
    isRegister: false,
  }),
  actions: {
    //register
    async register(options) {
      try {
        const user = await axios.post("/auth/register", options);
        toast.success("You are registered");
      } catch (error) {
        toast.error(`${error.message}`);
        console.log(error);
      }
    },
    async login(login) {
      try {
        const isLogin = await axios.post("/auth/login", login);
        toast.success("You are login");
      } catch (error) {
        toast.error(`${error.message}`);
        console.log(error);
      }
    },
    isLoginTrue() {
      this.isLogin = true;
    },
    isLoginFalse() {
      this.isLogin = false;
    },
  },
});
