<template>
  <div>
    <div v-for="item in data">
      <div>
        <span></span>
        <img :src="bags" alt="images" class="cursor-pointer" />
      </div>
      <div class="border border-t-0 rounded-sm w-[100%]">
        <h1 class="text-[18px] text-[#223263] font-bold font-sans">
          {{ item?.title }}
        </h1>
        <p>Yulduzchalar</p>
        <div class="flex gap-3 justify-center font-sans">
          <span class="text-[#40BFFF] font-bold text-[18px]"
            >${{ item?.price }}</span
          >
          <del class="text-[15px] text-[#9098B1]">${{ item?.oldPrice }}</del>
          <div>
            <span class="text-[#FB7181] font-sans text-[15px] font-bold"
              >{{ item?.procent }}%</span
            >
            <span class="text-[#FB7181] font-sans text-[15px] font-bold">{{
              item?.of ? `off` : `On`
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import bags from "../../assets/glasses1.png";

const props = defineProps({
  data: {
    type: Array,
  },
});
</script>
