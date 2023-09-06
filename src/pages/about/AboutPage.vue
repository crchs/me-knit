<template>
    <div>
        {{ msg }}
    </div>
</template>

<script setup>
import { onMounted, defineProps } from 'vue'

defineProps({
   msg: {
    type: String,
    default: 'O Kasience'
   }
})

onMounted(() => {
    // console.log('ddd', props)
})
</script>

<style scoped>

</style>
