<script setup>
import { RouterView } from "vue-router";
import Header from "./components/header/Header.vue";
import Header__list from "./components/header/Header__list.vue";
import Footer from "./components/footer/Footer.vue";
</script>

<template>
  <div class="flex flex-col justify-between min-h-[100vh]">
    <div>
      <Header class="relative z-50" />
      <Header__list />
    </div>
      <RouterView />
    <div>
      <Footer />
    </div>
  </div>
</template>
