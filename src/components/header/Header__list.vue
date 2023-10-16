<template>
  <div class="container">
    <ul class="flex justify-between sx:py-[10px] md:py-[26px]">
      <li class="flex gap-1 items-center">
        <img :src="logo" alt="site logo" class="sx:w-[30px] sm:w-[52px]" />
        <p class="sx:text-[15px] md:text-[18px] font-bold font-sans">E-Comm</p>
      </li>
      <li class="flex items-center gap-[32px]">
        <Category_list />
        <p
          v-for="item in data"
          :key="item?.id"
          class="cursor-pointer text-[20px] font-[500] font-sans sx:hidden md:block"
        >
          {{ item?.text }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script setup>
import logo from "../../assets/svg/logo.svg";
import Category_list from "../category/Category_list.vue";
const data = [
  {
    id: 1,
    text: "HOME",
  },
  {
    id: 2,
    text: "BAGS",
  },
  {
    id: 3,
    text: "SNEAKERS",
  },
  {
    id: 4,
    text: "BELT",
  },
  {
    id: 5,
    text: "CONTACT",
  },
];
</script>
<style scoped></style>
