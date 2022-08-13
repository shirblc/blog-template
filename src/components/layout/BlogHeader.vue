<template>
  <header id="blogHeader">
    <img :src="imgSrc" alt="site logo" />
    <h2 id="blogTitle">{{ blogName }}</h2>
    <div id="headerSubtitle"></div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  blogName: { type: String, default: "Name" },
});

const headerSubtitle = ref("");
const imgSrc = ref("");
</script>

<style lang="sass" scoped>
#blogHeader
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
</style>
