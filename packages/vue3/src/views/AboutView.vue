<script setup lang="ts">
import Virtual from '@/components/virtual/index.vue';
</script>
<template>
  <div class="about">
    <Virtual />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
