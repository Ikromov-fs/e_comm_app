<template>
  <div>
    <h1 class="text-[13px] md:text-[24px] md:font-bold">
      PROFESSIONAL EXPERIENCE
    </h1>
    <hr class="h-1 bg-black rounded-[2px]" />
    <div v-for="item in data" :key="item?.id">
      <h1 class="font-bold md:text-[25px]">{{ item?.job }}</h1>
      <div class="grid grid-cols-2">
        <div class="flex items-end">
          <img :src="building" alt="icon" class="w-[20%] max-w-[40px]" />
          <span class="sx:text-[13px] sm:text-[13px] lg:text-[20px]">{{
            item?.place
          }}</span>
        </div>
        <div class="grid grid-cols-2">
          <div class="flex items-center gap-1">
            <img :src="date" alt="icon" class="sx:w-[22%] max-w-[25px]" />
            <p
              class="sx:text-[8px] sm:text-[12px] xl:text-[16px] flex justify-end"
            >
              {{ item?.date }}
            </p>
          </div>
          <div class="flex items-center gap-1">
            <img :src="located" alt="icon" class="w-[20%] max-w-[18px]" />
            <p
              class="sx:text-[9px] sm:text-[12px] xl:text-[16px] flex justify-end"
            >
              {{ item?.laktation }}
            </p>
          </div>
        </div>
        <div class="md:gap-1 flex items-center">
          <img
            :src="link"
            alt="icon"
            class="sx:w-[22%] max-w-[25px] rotate-[-45deg]"
          />
          <a :href="item?.link" class="font-bold md:text-[16px]"
            >{{ item?.linkName }}|</a
          >
          <span class="sx:text-[10px] md:text-[15px]">{{
            item?.linkNameAfter
          }}</span>
        </div>
      </div>
      <ul class="list-disc mt-2">
        <li v-for="itemChild in item?.texts" class="md:text-[1.3rem]">
          {{ itemChild?.dataText }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import building from "../../assets/svg/building.svg";
import located from "../../assets/svg/located.svg";
import date from "../../assets/svg/date.svg";
import link from "../../assets/svg/link.svg";
const data = [
  {
    id: 1,
    job: "Front end",
    place: "algaritm academy",
    date: "june.2023 - july.2023",
    laktation: "Toshkent, Uzbekiston",
    link: "http://algaritm.uz/",
    linkName: "algaritm.uz",
    linkNameAfter: "full-time",
    texts: [
      {
        id: 1,
        dataText:
          "For Algaritm Academy, a special website. On this website, we used the Vue.js 3 (Vite) library, and the backend of this website is written in Java (Spring), which provides us with great speed.",
      },
      {
        id: 2,
        dataText:
          "Implemented comprehensive unit and integration testing for the project using Typescript, resulting in improved code quality, reduced bug occurrence, and increased development efficiency.",
      },
    ],
  },
  {
    id: 1,
    job: "Front end",
    place: "Psychological tests",
    date: "july.2023 - oct.2023",
    laktation: "Toshkent, Uzbekiston",
    link: "https://psixologiktestlar.uz/",
    linkName: "psixologiktestlar.uz",
    linkNameAfter: "full-time",
    texts: [
      {
        id: 1,
        dataText:
          "The psychological tests on this website have made a significant contribution to family psychology, strengthening relationships within the family, between parents and children, and in marital relationships, aimed at creating a happy family",
      },
      {
        id: 2,
        dataText:
          "Implemented comprehensive unit and integration testing for the project using Typescript, resulting in improved code quality, reduced bug occurrence, and increased development efficiency.",
      },
    ],
  },
];
</script>
<style scoped></style>
