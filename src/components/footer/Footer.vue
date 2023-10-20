<template>
  <div class="bg-[#BCDDFE] sx:pb-5 md:pb-10">
    <div class="container">
      <div class="py-10">
        <ul class="grid sx:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <li
            v-for="item in dataFirst"
            :key="item?.id"
            class="sx:max-w-full md:max-w-[220px] font-sans"
          >
            <div
              class="sx:min-h-[20px] sm:min-h-[40px] md:min-h-[60px] flex items-center"
            >
              <img v-if="item?.img" :src="item?.img" alt="logo" />
              <h2
                :class="
                  item?.id === 1
                    ? 'sx:text-[16px] md:text-[18px] font-bold'
                    : 'sx:text-[16px] md:text-[18px] font-[500] cursor-pointer hover:text-[#FF4858]'
                "
              >
                {{ item?.title }}
              </h2>
            </div>
            <p class="text-[12px]">{{ item?.text }}</p>
          </li>
        </ul>
        <ul
          class="sx:grid sx:grid-cols-2 sx:mt-3 md:flex md:justify-between md:mt-[80px]"
        >
          <li v-for="itemBottom in dataSecont" :key="item?.id">
            <h1 class="sx:text-[15px] sx:mt-2 md:text-[18px]">
              {{ itemBottom?.title }}
            </h1>
            <ul class="sx:mt-2 md:mt-[15px]">
              <li
                v-for="child in itemBottom?.textChild"
                class="sx:text-[13px] md:text-[14px] md:my-1 hover:text-[#FF4858] cursor-pointer"
              >
                {{ child?.childText }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr class="sx:py-2 md:py-4" />
      <div class="flex justify-between">
        <p class="sx:text-[10px] md:text-[14px]">
          © 2023 NS <span class="mx-2 font-serif font-bold">"webKiber"</span> IT
          comany
        </p>
        <div class="flex md:gap-[10px]">
          <Buy />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Buy from "../cartForBuy/Buy.vue";
import logo from "../../assets/svg/logo.svg";
const dataFirst = [
  {
    id: 1,
    title: "E-Comm",
    img: logo,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.",
    forSet: "",
    forSetInsta: "",
  },
  {
    id: 2,
    title: "Follow Us",
    img: "",
    text: "Since the 1500s, when an unknown printer took a galley of type and scrambled.",
    forSet: "Telegram",
    forSetInsta: "Instagram",
  },
  {
    id: 3,
    title: "Contact Us",
    img: "",
    text: "E-Comm , 4578 Marmora Road, Glasgow D04 89GR",
    forSet: "",
    forSetInsta: "",
  },
];
const dataSecont = [
  {
    id: 1,
    title: "Infomation",
    textChild: [
      {
        id: 1,
        childText: "About Us",
      },
      {
        id: 1,
        childText: "Infomation",
      },
      {
        id: 1,
        childText: "Privacy Policy",
      },
      {
        id: 1,
        childText: "Terms & Conditions",
      },
    ],
  },
  {
    id: 2,
    title: "Service",
    textChild: [
      {
        id: 1,
        childText: "About Us",
      },
      {
        id: 1,
        childText: "Infomation",
      },
      {
        id: 1,
        childText: "Privacy Policy",
      },
      {
        id: 1,
        childText: "Terms & Conditions",
      },
    ],
  },
  {
    id: 3,
    title: "My Account",
    textChild: [
      {
        id: 1,
        childText: "About Us",
      },
      {
        id: 1,
        childText: "Infomation",
      },
      {
        id: 1,
        childText: "Privacy Policy",
      },
      {
        id: 1,
        childText: "Terms & Conditions",
      },
    ],
  },
  {
    id: 4,
    title: "Our Offers",
    textChild: [
      {
        id: 1,
        childText: "About Us",
      },
      {
        id: 1,
        childText: "Infomation",
      },
      {
        id: 1,
        childText: "Privacy Policy",
      },
      {
        id: 1,
        childText: "Terms & Conditions",
      },
    ],
  },
];
</script>
