<template>
  <BlogHeader />
  <BlogMain />
  <BlogSidebar v-if="showSidebar" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlogHeader from "./components/layout/BlogHeader.vue";
import BlogMain from "./components/layout/BlogMain.vue";
import BlogSidebar from './components/layout/BlogSidebar.vue';

export default defineComponent({
  components: { BlogHeader, BlogMain, BlogSidebar },
  data: () => ({
    showSidebar: true,
  })
})
</script>

<style src="./sass/styles.sass" lang="sass"></style>
