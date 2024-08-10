<script setup lang="ts">
import { useResizable } from './hook.ts';
const domRef = ref()
const { onMouseDown } = useResizable(domRef, 200, 1000)
</script>

<template>
    <div>
        <h1>
            拖拽
        </h1>
        <div class="flex">
            <div ref="domRef" class="relative bg-[#f0f0f0] w-200px h-200px">
                ceshi
                <div class="w-1px h-full bg-[orange] absolute right-0 top-0 cursor-move" @mousedown="onMouseDown">
                </div>
            </div>
            <div class="flex-1 bg-[#f0f0f0]">
                asd
            </div>
        </div>
    </div>
</template>
