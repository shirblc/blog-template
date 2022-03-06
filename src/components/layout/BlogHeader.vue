<template>
  <header id="blogHeader">
    <img :src="imgSrc" alt="site logo" />
    <h2 id="blogTitle">{{ blogName }}</h2>
    <div id="headerSubtitle"></div>
  </header>
</template>

<script lang="ts" src="./BlogHeader.ts"></script>

<style lang="sass" scoped>
#blogHeader
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
</style>
