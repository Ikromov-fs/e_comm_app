<template>
  <div
    @click="prevModal"
    class="fixed z-[#99999] inset-0 bg-[#00000014] backdrop-blur-[11.5px]"
  ></div>
  <div
    class="reactive fixed z-[#99999] sx:w-[90%] mmd:w-[35%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fff] text-[#333] p-5 rounded-md"
  >
    <div>
      <h1 class="flex justify-center text-xl font-[500]">Register</h1>
      <div class="sx:mt-0 md:mt-7">
        <FormInput
          v-model="inputRegisterData.fullName"
          :error="$v.fullName.$error"
          label="F.I.Sh"
          placeholder="F.I.Sh"
          type="string"
        />
        <FormInput
          v-model="inputRegisterData.phoneNumber"
          :error="$v.phoneNumber.$error"
          type="string"
          placeholder="00 000-00-00"
          label="Tel nomer"
          v-maska="'(##) ###-##-##'"
          class="md:mt-4"
        />
        <FormInput
          v-model="inputRegisterData.password"
          type="password"
          placeholder="parol"
          :error="$v.password.$error"
          label="Parol"
          class="md:my-4"
        />
        <FormInput
          v-model="inputRegisterData.confirmPassword"
          type="password"
          placeholder="parolni takrorlash"
          :error="$v.confirmPassword.$error"
          label="Parolni takrorlash"
          class="md:my-4"
        />
        <div>
          <FormInput
            v-model="inputRegisterData.birthDate"
            :error="$v.birthDate.$error"
            type="email"
            placeholder="email@.com"
            label="Email"
            class="sx:mb-2 md:my-4"
          />
        </div>
        <div @click="submitBtn" class="overflow-hidden">
          <Button_blue button-text="Jo'natish"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import FormInput from "../../components/forms/Input.vue";
import { ref, computed, reactive } from "vue";
import axios from "axios";
import { useVuelidate } from "@vuelidate/core";
import { minLength, maxLength, required, sameAs } from "@vuelidate/validators";

import Button_blue from "../buttons/Button_blue.vue";
const inputRegisterData = reactive({
  fullName: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  gender: "true",
  birthDate: "",
});

const rules = computed(() => {
  return {
    fullName: { required, minLength: minLength(4), maxLength: maxLength(50) },
    password: { required, minLength: minLength(8) },
    confirmPassword: {
      required,
      sameAs: sameAs(inputRegisterData.password),
      minLength: minLength(8),
    },
    birthDate: { required },
    phoneNumber: { required },
    gender: { required },
  };
});
const resendCode = ref(false);
const $v = useVuelidate(rules, inputRegisterData);

const submitBtn = async () => {
  $v.value.$validate();
  if (!$v.value.$error) {
    try {
      const phone =
        "+998" +
        inputRegisterData.phoneNumber
          .replaceAll("-", "")
          .replace("(", "")
          .replace(") ", "");
      const userOptions = {
        phoneNumber: phone,
        fullName: inputRegisterData.fullName,
        password: inputRegisterData.password,
        confirmPassword: inputRegisterData.confirmPassword,
        gender: inputRegisterData.gender,
        birthDate: inputRegisterData.birthDate,
      };
    } catch (error) {
      console.log(error);
    } finally {
      $v.value.$reset();
    }
  }
};

// code input
function prevModal() {
  emit("isOpenRegister");
}
const emit = defineEmits(["isOpenRegister"]);
</script>
<style scoped></style>
