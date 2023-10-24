<template>
  <div class="container grid grid-cols-3">
    <div v-for="item in data" :key="item?.id" class="h-[93%] overflow-hidden">
      <div class="relative">
        <img
          :src="item?.img"
          alt="tavar image"
          class="min-w-[100%] object-cover"
        />
        <h1
          class="sx:text-[9px] xs:text-[12px] sx:leading-[13px] ss:text-[17px] ss:top-3 ss:left-2 ss:leading-[19px] lg:text-[20px] lg:max-w-[180px] lg:leading-[29px] lg:font-bold absolute top-[1px] font-[500] text-[#223263] font-sans"
        >
          {{ item?.title }}
        </h1>
        <div
          class="absolute sx:bottom-1 sm:bottom-3 md:bottom-4 md:left-5 md:gap-2 xl:bottom-8 flex"
        >
          <del
            class="sx:text-[8px] xs:text-[10px] sm:text-[14px] text-[#9098B1]"
            >${{ item?.oldPrice }}</del
          >
          <p
            class="sx:text-[8px] xs:text-[10px] sm:text-[14px] md:text-[18px] md:font-bold text-[#FB7181] font-sans"
          >
            {{ item?.procent }}%
          </p>
          <p
            class="sx:text-[8px] xs:text-[10px] sm:text-[14px] md:text-[18px] md:font-bold text-[#FB7181] font-sans"
          >
            {{ item?.onSale ? `off` : `onn` }}
          </p>
        </div>
        <p
          :class="item?.id === 2 ? `md:top-8` : ``"
          class="absolute sx:text-[10px] sx:bottom-1 sx:right-1 sm:bottom-4 md:text-[20px] md:bottom-4 md:right-[10px] xl:bottom-9 xl:right-[23px] xl:text-[30px] text-[#40BFFF] font-bold font-serif"
        >
          ${{ item?.price }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import bag from "../../assets/bag.png";
import glasses from "../../assets/glasses1.png";
import glasses2 from "../../assets/glasses2.png";
const data = [
  {
    id: 1,
    title: "FS - Quilted Maxi Cross Bag",
    img: bag,
    price: "299,43",
    oldPrice: "534,33",
    procent: "24",
    onSale: true,
  },
  {
    id: 2,
    title: "FS - Nike Air Max 270 React...",
    img: glasses,
    price: "299,43",
    oldPrice: "534,33",
    procent: "24",
    onSale: true,
  },
  {
    id: 3,
    title: "FS - Nike Air Max 270 React...",
    img: glasses2,
    price: "299,43",
    oldPrice: "534,33",
    procent: "24",
    onSale: true,
  },
];
</script>
<style scoped></style>
