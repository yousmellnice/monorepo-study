<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">首页</RouterLink> | 
      <RouterLink to="/about">虚拟滚动 demo</RouterLink> | 
      <RouterLink to="/use">vue use</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
</style>
