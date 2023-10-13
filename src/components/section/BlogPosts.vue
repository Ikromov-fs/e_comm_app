<template>
  <div>
    <h1 class="text-[13px] md:text-[24px] md:font-bold">BLOG POSTS</h1>
    <hr class="h-1 bg-black rounded-[2px]" />
    <div class="flex flex-wrap gap-2 mt-2">
      <span
        v-for="(item, index) in data"
        :key="index"
        class="p-2 border sx:text-[13px] md:text-xl text-[#812626]"
        >{{ item?.name }}</span
      >
    </div>
  </div>
</template>
<script setup>
const data = [
  {
    id: 1,
    name: "OOP",
  },
  {
    id: 2,
    name: "SOLID",
  },
  {
    id: 3,
    name: "RabbitMQ | Microservice vs Monolith",
  },
  {
    id: 4,
    name: "Data structures and algorithms",
  },
];
</script>
<style scoped></style>
