<template>
  <div>
    <div>
      <Header />
    </div>
    <div
      class="container grid sx:grid-cols-1 sm:grid-cols-2 px-1 pt-2 sx:gap-5 sm:gap-10 pb-5"
    >
      <Summary />
      <Language />
      <Education />
      <Skills />
      <!-- <BlogPosts /> -->
      <JobStaj />
      <SoffSkills />
      <!-- <Projects /> -->
    </div>
  </div>
</template>
<script setup>
import Header from "../components/header/Header.vue";
import Language from "../components/section/Language.vue";
import Education from "../components/section/Education.vue";
import Projects from "../components/section/Projects.vue";
import Skills from "../components/section/Skills.vue";
import SoffSkills from "../components/section/SoffSiklls.vue";
import Summary from "../components/section/Summary.vue";
import BlogPosts from "../components/section/BlogPosts.vue";
import JobStaj from "../components/section/JobStaj.vue";
</script>
<style></style>
