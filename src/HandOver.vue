<script setup lang="ts">
import icons from "./assets/mood.vue";
import smile from "./components/rightComponents/Smile.vue";
</script>

<template>
  <smile v-for="icon in icons" :key="icon" v-bind:oneIcon="icon"></smile>
</template>

<style scoped></style>
