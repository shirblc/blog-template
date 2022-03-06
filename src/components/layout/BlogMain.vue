<template>
  <div id="blogMain">
    <template v-if="displayPosts.length > 0">
      <div v-for="post in displayPosts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <div>{{ post.text }}</div>
      </div>
    </template>
    <span class="noposts" v-else>
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
