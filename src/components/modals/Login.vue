<template>
  <div
    @click="prevModal"
    class="fixed z-[#99999] inset-0 bg-[#00000014] backdrop-blur-[11.5px]"
  ></div>
  <div
    class="reactive fixed z-[#99999] sx:w-[90%] mmd:w-[35%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fff] text-[#333] p-5 rounded-md"
  >
    <div>
      <h1 class="flex justify-center text-xl font-[500]">Login</h1>
      <div class="sx:mt-0 md:mt-7">
        <FormInput
          v-model="inputRegisterData.password"
          type="password"
          placeholder="parol"
          :error="$v.password.$error"
          label="Parol"
          class="md:my-4"
        />
        <FormInput
          v-model="inputRegisterData.email"
          :error="$v.email.$error"
          type="email"
          placeholder="email@.com"
          label="Email"
          class="sx:mb-2 md:my-4"
          name="email"
        />
        <div @click="submitBtn" class="overflow-hidden mt-4 mb-2">
          <Button_blue button-text="Submit" />
        </div>
        <span
          >Not a member?
          <span @click="goRegister" class="cursor-pointer text-[blue]"
            >Register</span
          ></span
        >
      </div>
    </div>
    <Regsiter
      @isOpenRegister="store.isRegister = false"
      v-if="store.isRegister"
    />
  </div>
</template>
<script setup lang="ts">
import FormInput from "../../components/forms/Input.vue";
import { ref, computed, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { minLength, maxLength, required, sameAs } from "@vuelidate/validators";
import Button_blue from "../buttons/Button_blue.vue";
import Regsiter from "./Regsiter.vue";
import { auth } from "../../store/auth.js";

const store = auth();
const inputRegisterData = reactive({
  password: "",
  email: "",
});

const rules = computed(() => {
  return {
    password: { required, minLength: minLength(8) },
    email: { required },
  };
});
const $v = useVuelidate(rules, inputRegisterData);

const submitBtn = async () => {
  $v.value.$validate();
  if (!$v.value.$error) {
    try {
      const userOptions = {
        password: inputRegisterData.password,
        email: inputRegisterData.email,
      };
      const isRegister = await store.register(userOptions);
    } catch (error) {
      console.log(error);
    } finally {
      (inputRegisterData.email = ""),
        (inputRegisterData.password = ""),
        $v.value.$reset();
    }
  }
};

function goRegister() {
  store.isRegister = true;
  emit("isOpenLogin");
}
// code input
function prevModal() {
  emit("isOpenLogin");
}
const emit = defineEmits(["isOpenLogin"]);
</script>
<style scoped></style>
