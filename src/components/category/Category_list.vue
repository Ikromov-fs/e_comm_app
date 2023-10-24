<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <p 
      :class="store.isRegister ? 'opacity-[0.1] hidden' : 'opacity-1'"
      class="sx:text-[15px] md:text-[20px] sx:mt-[8px] md:mt-[2px]">
        CATEGORY
      </p>
    </span>
    <template #dropdown>
      <el-dropdown-menu class="grid md:grid-cols-5 sx:grid-cols-2">
        <el-dropdown-item v-for="item in data">
          {{ item?.text }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { auth } from "../../store/auth.js";
const store = auth();
const data = [
  {
    id: 1,
    text: "Shop",
  },
  {
    id: 1,
    text: "Shop",
  },
  {
    id: 1,
    text: "Shop",
  },
  {
    id: 1,
    text: "Shop",
  },
  {
    id: 1,
    text: "Shop",
  },
  {
    id: 1,
    text: "Shop",
  },
  {
    id: 1,
    text: "Shop",
  },
  {
    id: 1,
    text: "Shop",
  },
  {
    id: 1,
    text: "Shop",
  },
  {
    id: 1,
    text: "Shop",
  },
  {
    id: 1,
    text: "Shop",
  },
  {
    id: 1,
    text: "Shop",
  },
];
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
