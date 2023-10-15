<template>
  <div class="overflow-hidden min-w-[120px]">
    <button
      class="py-[6px]  w-full sx:text-[14px] md:text-[18px] font-[500] bg-[#33A0FF] text-white text-center rounded-[10px] cursor-pointer"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  buttonText: {
    type: String,
  },
});
</script>
<style lang=""></style>
