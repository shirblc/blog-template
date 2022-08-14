<template>
  <BlogHeader />
  <BlogMain />
  <BlogSidebar v-if="showSidebar" />
</template>

<script setup lang="ts">
import BlogMain from "./components/layout/BlogMain.vue";
import BlogHeader from "./components/layout/BlogHeader.vue";
import BlogSidebar from "./components/layout/BlogSidebar.vue";
import { ref } from "vue";

const showSidebar = ref(false);
</script>

<style scoped lang="sass">
div
    padding: 10px
</style>
