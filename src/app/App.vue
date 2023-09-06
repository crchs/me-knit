<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <NavigationEntity />
      
      <v-main class="d-flex align-center justify-center">
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import NavigationEntity from '@/entities/navigation/NavigationEntity.vue';

</script>

<style></style>
