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

<script src="./BlogMain.ts" lang="ts"></script>

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
