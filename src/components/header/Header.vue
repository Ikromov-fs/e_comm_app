<template>
  <div class="container">
    <ul class="header__container">
      <li class="header__lang">EN</li>
      <li class="header__items-parent">
        <div
          v-for="item in headerData"
          :key="item?.id"
          class="header__child-item"
          @click="openModalRegisterIsTrue(item?.id)"
        >
          <img
            :src="item?.icon"
            alt="avatar"
            :class="
              item?.icon
                ? `object-cover block float-right icon__header`
                : `hidden`
            "
          />
          <p :class="item?.id === 2 ? `countBuy` : `header__items-text`">
            {{ item?.text }}
          </p>
        </div>
        <Header_search />
      </li>
    </ul>
  </div>
  <hr />
  <Register @isOpenRegister="store.isRegister = false" v-if="store.isRegister" />
</template>
<script setup>
import avatar from "../../assets/svg/avatar.svg";
import buy from "../../assets/svg/buy.svg";
import Register from "../modals/Regsiter.vue";
import Header_search from "./Header_search.vue";

import { auth } from "../../store/auth";

const store = auth();
const headerData = [
  {
    id: 1,
    text: "My profile",
    icon: avatar,
  },
  {
    id: 2,
    text: "2",
    icon: buy,
  },
  {
    id: 3,
    text: "Items",
    icon: "",
  },
];

function openModalRegisterIsTrue(item) {
  if (item === 1) {
    store.isRegister = true;
  }
}
</script>
<style scoped>
.header__container {
  display: flex;
  justify-content: space-between;
  padding-top: 26px;
  padding-bottom: 14px;
}
.header__child-item {
  display: flex;
  align-items: center;
  position: relative;
  gap: 6px;
}
.header__items-parent {
  display: flex;
  gap: 32px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}
.header__items-text:hover {
  color: #40bfff;
}
.countBuy {
  position: absolute;
  top: -8px;
  right: -9px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fb7181;
  border-radius: 50%;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
}
@media (min-width: 320px) {
  .header__items-parent {
    font-size: 16px;
    gap: 10px;
  }
  .header__child-item {
    gap: 10px;
  }
  .header__lang {
    display: none;
  }
}
@media (min-width: 375px) {
  .header__lang {
    display: block;
  }
}
@media (min-width: 576px) {
  .header__lang {
    display: block;
  }
  .header__items-parent {
    font-size: 20px;
    gap: 32px;
  }
}
</style>
