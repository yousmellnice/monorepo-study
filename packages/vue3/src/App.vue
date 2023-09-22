<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-full">
    <aside class="w-200px bg-[#f1f1f1]">
      顶部
    </aside>
    <aside class="flex-auto flex flex-col">
      <nav class="h-120px bg-[#f8f8f8] flex-shrink-0">
        <RouterLink to="/">首页</RouterLink> | 
        <RouterLink to="/about">虚拟滚动 demo</RouterLink> | 
        <RouterLink to="/g6">g6 demo</RouterLink>
      </nav>
      <section class="flex-auto">
        <RouterView class="h-full" />
      </section>
    </aside>
  </div>
</template>

<style scoped>
</style>
