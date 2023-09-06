<template>
    <div>
        Tu będzie hołm pejdż
    </div>
</template>

<script setup>
import { onMounted, defineProps } from 'vue'

defineProps({
    msg: String
})

onMounted(() => {
    // console.log('ddd', props)
})
</script>

<style scoped>

</style>
