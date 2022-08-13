<template>
  <div class="blogPost">
    <h3>{{ post.title }}</h3>
    <div>{{ post.text }}</div>
    <div id="buttonsContainer">
      <button class="postBtn" @click="toggleComments">
        {{ showComments ? "Hide Comments" : "Show Comments" }}
      </button>
    </div>
    <div id="commentsContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import { BlogPost } from "../interfaces/BlogData";

const props = defineProps({
  post: { type: Object as PropType<BlogPost>, required: true },
});

const showComments = ref(false);

/**
 * Show/hide the comments
 */
function toggleComments() {
    showComments.value = !showComments.value;
  }
</script>

<style lang="sass" scoped>
.blogPost
  display: flex
  flex-direction: column

#buttonsContainer
  display: flex
  flex-wrap: wrap

.postBtn
  border: none
  background: transparent
</style>
