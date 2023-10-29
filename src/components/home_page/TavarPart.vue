<template>
  <div class="container text-center">
    <div class="pb-20">
      <h1 class="flex justify-center text-[35px] font-[500] font-sans">
        BEST SELLER
      </h1>
      <ul class="flex justify-center gap-20 text-[22px]">
        <li
          v-for="item in categorys"
          :key="item?.id"
          class="py-5 cursor-pointer"
        >
          {{ item?.text }}
        </li>
      </ul>
      <MainCards :data="data" class="grid grid-cols-4 gap-8" />
    </div>
  </div>
</template>
<script setup>
import MainCards from "../tavarCards/MainCards.vue";

const data = [
  {
    id: 1,
    img: "",
    title: "Nike Air Max 270 React",
    price: "299,43",
    oldPrice: "534,33",
    procent: "24",
    of: true,
  },
  {
    id: 2,
    img: "",
    title: "Nike Air Max 270 React",
    price: "299,43",
    oldPrice: "534,33",
    procent: "24",
    of: true,
  },
  {
    id: 3,
    img: "",
    title: "Nike Air Max 270 React",
    price: "299,43",
    oldPrice: "534,33",
    procent: "24",
    of: true,
  },
  {
    id: 4,
    img: "",
    title: "Nike Air Max 270 React",
    price: "299,43",
    oldPrice: "534,33",
    procent: "24",
    of: true,
  },
  {
    id: 5,
    img: "",
    title: "Nike Air Max 270 React",
    price: "299,43",
    oldPrice: "534,33",
    procent: "24",
    of: true,
  },
  {
    id: 6,
    img: "",
    title: "Nike Air Max 270 React",
    price: "299,43",
    oldPrice: "534,33",
    procent: "24",
    of: true,
  },
  {
    id: 7,
    img: "",
    title: "Nike Air Max 270 React",
    price: "299,43",
    oldPrice: "534,33",
    procent: "24",
    of: true,
  },
  {
    id: 8,
    img: "",
    title: "Nike Air Max 270 React",
    price: "299,43",
    oldPrice: "534,33",
    procent: "24",
    of: true,
  },
];

const categorys = [
  {
    id: 1,
    text: "All",
  },
  {
    id: 2,
    text: "Bags",
  },
  {
    id: 3,
    text: "Sneakers",
  },
  {
    id: 4,
    text: "Belt",
  },
  {
    id: 5,
    text: "Sunglasses",
  },
];
</script>
