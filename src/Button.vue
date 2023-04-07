<script lang="ts" setup>
const props = defineProps<{
  text: string;
}>();

const emits = defineEmits(["changeButton"]);

function emitChangeButton() {
  emits("changeButton");
}
</script>
<template>
  <button @click="emitChangeButton">{{ text }}</button>
</template>
