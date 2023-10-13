<template>
  <div>
    <h1 class="text-[13px] md:text-[24px] md:font-bold">SOFT SKILLS</h1>
    <hr class="h-1 bg-black rounded-[2px]" />
    <div class="flex flex-wrap gap-2 mt-2">
      <span
        v-for="(item, index) in data"
        :key="index"
        class="p-2 border sx:text-[13px] md:text-xl"
        >{{ item?.name }}</span
      >
    </div>
  </div>
</template>
<script setup>
const data = [
  {
    id: 1,
    name: "Teaching",
  },
  {
    id: 4,
    name: "Sociable",
  },
  {
    id: 5,
    name: "Good at researching",
  },
  {
    id: 6,
    name: "Collaborating",
  },
  {
    id: 7,
    name: "Fast learning",
  },
  {
    id:8,
    name:"sportsman 😉"
  }
];
</script>
<style scoped></style>
