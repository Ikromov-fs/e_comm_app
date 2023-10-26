<template>
  <div
    @click="prevModal"
    class="fixed z-[#99999] inset-0 bg-[#00000014] backdrop-blur-[11.5px]"
  ></div>
  <div
    class="reactive fixed z-[#99999] sx:w-[90%] mmd:w-[35%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fff] text-[#333] p-5 rounded-md"
  >
    <div>
      <h1 class="flex justify-center text-xl font-[500]">
        <span v-if="store?.isLogin">Register</span>
        <span v-if="!store?.isLogin">Login</span>
      </h1>
      <div class="sx:mt-0 md:mt-7">
        <div v-if="store?.isLogin">
          <FormInput
            v-model="inputRegisterData.fullName"
            :error="$v.fullName.$error"
            label="F.I.Sh"
            placeholder="F.I.Sh"
            type="string"
          />
        </div>
        <FormInput
          v-model="inputRegisterData.email"
          :error="$v.email.$error"
          type="email"
          placeholder="email@.com"
          label="Email"
          class="sx:mb-2 md:my-4"
          name="email"
        />
        <FormInput
          v-model="inputRegisterData.password"
          type="password"
          placeholder="parol"
          :error="$v.password.$error"
          label="Parol"
          class="md:my-4"
        />
        <div @click="submitBtn" class="overflow-hidden sx:mt-2">
          <Button_blue button-text="Submit" />
        </div>
        <pre>{{ store.isLogin }}</pre>
        <div v-if="!store?.isLogin">
          Create account
          <span @click="goRegister" class="text-[blue] cursor-pointer mx-1"
            >Register</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import FormInput from "../../components/forms/Input.vue";
import { ref, computed, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { minLength, maxLength, required, sameAs } from "@vuelidate/validators";
import Button_blue from "../buttons/Button_blue.vue";
import { auth } from "../../store/auth.js";

const store = auth();
const inputRegisterData = reactive({
  fullName: "",
  password: "",
  email: "",
});

const rules = computed(() => {
  return {
    fullName: { required, minLength: minLength(4), maxLength: maxLength(50) },
    password: { required, minLength: minLength(8) },
    email: { required },
  };
});
const $v = useVuelidate(rules, inputRegisterData);

const submitBtn = async () => {
  $v.value.$validate();
  if (!$v.value.$error) {
    if (store.isLogin) {
      try {
        const userOptions = {
          name: inputRegisterData.fullName,
          password: inputRegisterData.password,
          email: inputRegisterData.email,
        };
        const isRegister = await store.register(userOptions);
      } catch (error) {
        console.log(error);
      } finally {
        (inputRegisterData.email = ""),
          (inputRegisterData.password = ""),
          (inputRegisterData.fullName = ""),
          $v.value.$reset();
      }
    } else {
      alert("ishladi");
    }
  }
};

function goRegister() {
  store.isLoginTrue();
}

function prevModal() {
  emit("isOpenRegister");
  store.isLoginFalse();
}
const emit = defineEmits(["isOpenRegister"]);
</script>
<style scoped></style>
