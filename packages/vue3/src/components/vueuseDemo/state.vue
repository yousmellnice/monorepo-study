<script setup lang="ts">
const scope = effectScope()
const count = ref(0)
const state = scope.run(() => {
    const globalCount = computed(() => count.value * 2)
    watch(globalCount, () => console.log('global count:', globalCount.value))
    watchEffect(() => console.log('watch effect: ', globalCount.value))
    onScopeDispose(() => {
        console.log('停止监听了 !')
    })
})

const start = () => {
    setInterval(() => {
        count.value++
    }, 1000);
}

const curScope = getCurrentScope()
const showScope = () => {
    console.log(curScope);
}

const stop = () => {
    scope.stop()
}
</script>

<template>
    <div>
        <h2>
            createGlobalState
        </h2>
        <button @click="start">
            start
        </button>
        <button class="ml-10px" @click="showScope">
            showScope
        </button>
        <button class="ml-10px" @click="stop">
            stop
        </button>
    </div>
</template>

<style scoped lang="less"></style>
