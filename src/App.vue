<script setup>
import { RouterView } from "vue-router";
import Header from "./components/header/Header.vue";
import Header__list from "./components/header/Header__list.vue";
</script>

<template>
  <div>
    <div>
      <Header class="relative z-50" />
      <Header__list />
    <RouterView />
    </div>
  </div>
</template>
