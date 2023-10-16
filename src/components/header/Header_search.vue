<template>
  <div class="search__parent">
    <label class="search__label">
      <input
        type="text"
        placeholder="$0.00"
        autocomplete="off"
        style="caret-color: #40bfff; outline: none"
        class="search__label-input"
        v-model="inputData"
      />
      <img :src="search" alt="search" class="cursor-pointer" />
    </label>
    <div class="absolute">
    {{ inputData }}
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import search from "../../assets/svg/search.svg";
const inputData = ref();
</script>
<style scoped>
.search__label {
  display: flex;
  align-items: center;
  gap: 6px;
}

.search__label-input {
  outline: none;
  max-width: 62px;
}

@media (min-width: 320px) {
  .search__parent{
    margin-left: 15px;
  }
  .header__items-parent {
    display: none;
  }
}
@media (min-width: 576px) {
  .header__burger {
    display: none;
    cursor: pointer;
  }
  .header__items-parent {
    display: flex;
  }
}
</style>
