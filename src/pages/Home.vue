<template>
  <div :class="store.isRegister ? `z-[-2]` : ``">
    <Banner />
    <BigCard class="sx:-translate-y-5 md:-translate-y-20" />
    <TavarPart />
  </div>
</template>
<script setup>
import Banner from "../components/banner/Banner.vue";
import BigCard from "../components/tavarCards/BigCard.vue";
import TavarPart from "../components/home_page/TavarPart.vue";
import { auth } from "../store/auth.js";
const store = auth();
</script>
<style></style>
