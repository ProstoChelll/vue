<script setup lang="ts">
const waterImg =
  "M23 22.25C23 28.3251 18.0751 33.25 12 33.25C5.92487 33.25 1 28.3251 1 22.25C1 18.7783 3.0291 14.3548 5.51793 10.2851C7.9525 6.30413 10.7069 2.85004 12.0063 1.28741C13.3092 2.83009 16.06 6.2335 18.49 10.1927C20.9721 14.2367 23 18.6733 23 22.25Z";

const props = defineProps<{
  fillColor?: string;
}>();
</script>

<template>
  <svg class="water">
    <path :d="waterImg" stroke="#B0B0B0" stroke-width="2"></path>
  </svg>
</template>

<style scoped>
.water {
  width: 24px;
  height: 35px;
  fill: none;
}
.water > path {
  fill: v-bind(fillColor);
}
</style>
