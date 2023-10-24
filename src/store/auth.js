import axios from 'axios';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';

const toast = useToast()
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
        toast.success("You are registered")
        console.log(user);
      } catch (error) {
        toast.error(`${error.message}`)
        console.log(error);
      }
    },
  },
});
