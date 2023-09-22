<script setup lang="ts">
import { watch, ref } from 'vue';
import { useActiveElement, useDraggable } from '@vueuse/core'
const activeElement = useActiveElement()
watch(activeElement, (el) => {
  console.log('focus changed to', el)
})
const el = ref<HTMLElement | null>(null)
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 400, y: 300 },
})
</script>

<template>
  <div>
    <h1>
      vue use demo
    </h1>
    <h2>
      Elements
    </h2>
    <div>
      <h3>
        useActiveElement
      </h3>
      <input type="text">
    </div>
    <div>
      <h3>
        useDraggable
      </h3>
      <div ref="el" :style="style" class="cursor-pointer" style="position: fixed">
        这是一个可以拖拽的 div {{ style }}
      </div>
    </div>
  </div>
</template>
