<template>
  <div>
    <h1 class="text-[13px] md:text-[24px] md:font-bold">TECH SKILLS</h1>
    <hr class="h-1 bg-black rounded-[2px]" />
    <p class="font-bold md:text-[19px]">Technologies & Frameworks</p>
    <div class="flex flex-wrap gap-2 mt-2">
      <span
        v-for="(item, index) in data"
        :key="index"
        class="p-2 border sx:text-[13px] md:text-xl"
        >{{ item?.name }}</span
      >
    </div>
    <!-- <p class="font-bold md:text-[19px] mmd:mt-2">Coursework</p>
    <div class="flex flex-wrap gap-2 mt-2">
      <span
        v-for="(item, index) in dataSiklls"
        :key="index"
        class="p-2 border sx:text-[13px] md:text-xl"
        >{{ item?.name }}</span
      >
    </div> -->
  </div>
</template>
<script setup>
const data = [
  {
    id: 1,
    name: "Javascript",
  },
  {
    id: 2,
    name: "Typescript",
  },
  {
    id: 3,
    name: "React js",
  },
  {
    id: 4,
    name: "Vue js",
  },
  {
    id: 5,
    name: "Tailwind css",
  },
  {
    id: 6,
    name: "Material ui",
  },
  {
    id: 7,
    name: "Element plus",
  },
];
// const dataSiklls = [
//   {
//     name: "OOP",
//     id: 1,
//   },
//   {
//     name: "SOLID",
//     id: 2,
//   },
//   {
//     name: "Clean Code",
//     id: 3,
//   },
// ];
</script>
<style scoped></style>
