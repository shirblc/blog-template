<template>
  <div role="complementary" id="sidebar">
    <div v-for="list in displayGroups" :key="list.name">
      <h3 v-if="!list.image" class="group-header">{{ list.name }}</h3>
      <img v-if="list.image" :src="list.image" :alt="list.name" />
      <div v-if="list.items.length > 0" :class="`items-container ${list.type}`">
        <div v-for="(item, index) in list.items" :key="index" class="sidebar-item">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./BlogSidebar.ts" lang="ts"></script>

<style lang="sass" scoped>
#sidebar
  width: 30%
</style>
