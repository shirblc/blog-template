<template>
  <div id="blogMain">
    <template v-if="displayPosts.length > 0">
      <BlogPost v-for="post in displayPosts" :key="post.id" :post="post" />
    </template>
    <span v-else class="noposts">
      There are no posts here. Write your first one now!
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { PropType, ref } from "vue";
import { BlogPost as BlogPostType } from "../../interfaces/BlogData";
import BlogPost from "../BlogPost.vue";

const props = defineProps({
  infiniteScroll: { type: Boolean, default: false },
    posts: {
      type: Array as PropType<BlogPostType[]>,
      default: () => [] as BlogPostType[],
    },
});

const page = ref(1);

const startIndex = computed(() => (page.value - 1) * 5);
const displayPosts = computed(() => {
  return props.infiniteScroll
    ? props.posts
    : props.posts.slice(startIndex.value, startIndex.value + 5);
}) 
</script>

<style lang="sass" scoped>
#blogMain
  padding: 10px
  flex-grow: 1
  display: flex
  flex-direction: column
  justify-content: center

.noposts
  text-align: center
</style>
