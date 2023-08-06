<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
// todo
// 1. 完成一个基本的虚拟滚动的组件结构
// 2. 可优化项
// 2.1 滚动过程中的白屏处理：添加缓冲区，如何添加？上面的缓冲区，通过定位解决；下面的缓冲区通过加大 endIndex；
// 2.2 滚动过程如何过渡
const list = computed(() => {
    let value = [];
    for (let index = 0; index < 10000; index++) {
        value.push({
            name: `ysn${index + 1}`,
            address: `深圳${index + 1}`,
            time: `${index + 1}`,
        })
    }
    return value;
});
const itemHeight = 50;
const totalHeight = computed(() => {
    return list.value.length * itemHeight ?? 0;
});
const conRef = ref(null);
const listRef = ref(null);
const startIndex = ref(0);
const endIndex = ref(0);
// 根据高度算出展示的个数
const visibleCount = computed(() => {
    // console.log(Math.ceil(conRef.value.clientHeight / itemHeight));
    return Math.ceil(conRef.value.clientHeight / itemHeight);
});
const showList = computed(() => {
    return list.value.slice(startIndex.value, endIndex.value);
    // return list.value.slice(startIndex.value - aboveCount.value, endIndex.value + belowCount.value);
})
const startOffset = ref(0) // 列表偏移的距离
const scrollEvent = () => {
    const scrollTop = conRef.value.scrollTop;
    
    const aboveCount = Math.floor(scrollTop / itemHeight);
    startIndex.value = aboveCount;
    endIndex.value = startIndex.value + visibleCount.value + 10;
    startOffset.value = scrollTop - (scrollTop % itemHeight);
}
const aboveCount = 5 * (itemHeight);
const aboveHeight = computed(() => {
    if (startOffset.value >= totalHeight?.value - aboveCount - conRef.value?.clientHeight) {
        return 0;
    }
    return startOffset.value - aboveCount > 0 ? -aboveCount : 0;
})
onMounted(() => {
    scrollEvent();
})
</script>

<template>
    <div>
        {{ startIndex }}
        {{ endIndex }}
        <div class="container" ref="conRef" @scroll="scrollEvent($event)">
            <div class="back" :style="{ height: `${totalHeight}px` }">
                <div ref="listRef" class="list" :style="{ transform: `translate3d(0, ${startOffset}px, 0)`, top: aboveHeight + 'px' }">
                    <div class="line" v-for="item in showList" :key="item.time">
                        <div class="item">
                            {{ item.name }}
                        </div>
                        <div class="item">
                            {{ item.address }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 400px;
    width: 200px;
    position: relative;
    overflow-anchor: none;
    overflow: auto;
    background-color: #fff;
}
.back {
    width: 200px;
    position: absolute;
    /* top: 0;
    left: 0;
    right: 0;
    z-index: -1; */
}
.list {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
.line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    height: 50px;
    padding: 6px 8px;
    width: 200px;
    background-color: pink;
}
.item {
    margin-right: 8px;
}
</style>
