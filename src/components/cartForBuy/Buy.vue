<template>
  <div v-for="item in data" :key="item?.id">
    <img :src="item?.img" alt="buy cart" class="md:w-[60px] object-cover" />
  </div>
</template>
<script setup>
import payme from "../../assets/buy/payMe.svg";
import union from "../../assets/buy/union.svg";
const data = [
  {
    id: 1,
    img: payme,
  },
  {
    id: 2,
    img: union,
  },
];
</script>
