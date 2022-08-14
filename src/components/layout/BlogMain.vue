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
import { computed, ref } from "vue";
import BlogPost from "../BlogPost.vue";
import { useStore } from '../../stores/posts';

const store = useStore();

const props = defineProps({
  infiniteScroll: { type: Boolean, default: false },
});

const page = ref(1);

const startIndex = computed(() => (page.value - 1) * 5);
const displayPosts = computed(() => {
  return props.infiniteScroll
    ? store.posts
    : store.posts.slice(startIndex.value, startIndex.value + 5);
});
</script>

<style scoped lang="sass">
#blogMain
  padding: 10px
  flex-grow: 1
  display: flex
  flex-direction: column
  justify-content: center

.noposts
  text-align: center
</style>
