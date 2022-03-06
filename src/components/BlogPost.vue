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

<script src="./BlogPost.ts" lang="ts"></script>

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
