<template>
  <div class="search__parent">
    <label class="search__label">
      <input
        type="text"
        placeholder="$0.00"
        autocomplete="off"
        class="search__label-input"
      />
      <img :src="search" alt="search" />
    </label>
  </div>
</template>
<script setup>
import search from "../../assets/svg/search.svg";
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
