<template>
    <!-- <NavigationEntity /> -->
    <div>
        {{ msg }}
    </div>
</template>

<script setup>
import { onMounted, defineProps } from 'vue'
// import NavigationEntity from '@/entities/navigation/NavigationEntity.vue';

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
