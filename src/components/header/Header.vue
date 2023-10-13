<template>
  <div class="bg-[#000]">
    <div class="container text-white">
      <div class="w-[100%] flex px-1 py-2 xl:py-10">
        <div class="w-[70%]">
          <h1 class="text-[19px] sm:text-[26px] md:text-[39px] md:font-bold lg:text-[56px]">Nodir Ikromov</h1>
          <h2 class="text-[12px] sm:text-[22px] md:text-[25px] lg:text-[32px]">Front end developer</h2>
          <ul class="pt-1">
            <li class="grid grid-cols-2 md:mt-2">
              <a v-for="(item, index) in data" :key="index" :href="item?.href" class="flex gap-1 text-white sm:my-[3px] md:my-0">
                <img :src="item?.icon" alt="icon" class="w-[9%] sm:w-[18px]"/>
                <p class="text-[80%] sm:text-[100%] md:text-[20px]">{{ item?.name }}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="w-[30%] h-[30%] flex items-center justify-end object-cover ">
          <img
            :src="Suhrob_aka"
            alt="user imag"
            class="rounded-[50%] w-[100%] object-cover sx:max-w-[100px] sx:max-h-[100px] sm:max-w-[150px] sm:max-h-[150px]  mmd:max-w-[250px] mmd:max-h-[250px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import phone from "../../assets/svg/phone.svg";
import github from "../../assets/svg/github.svg";
import gmail from "../../assets/svg/gmail.svg";
import tg from "../../assets/svg/tg.svg";
import linkedin from "../../assets/svg/linedin.svg";
import Suhrob_aka from "../../assets/sheff.jpg"
const data = [
  {
    name: "(99)-105 92 01",
    icon: phone,
    href: "#",
  },
  {
      name: "LinkedIn",
      icon: linkedin,
      href: "https://www.linkedin.com/in/nodir-ikromov-641992279/",
    },
    {
        name: "Telegram",
        icon: tg,
        href: "https://t.me/time_nnpm",
    },
    {
        name: "GitHub",
        icon: github,
        href: "https://github.com/Ikromov-fs",
    },
    {
      name: "nodirikromov10@gmail.com",
      icon: gmail,
      href: "mailto:nodirikromov10@gmail.com",
    },
];
</script>
<style scoped></style>
