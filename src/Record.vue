<script setup lang="ts">
const props = defineProps<{
  time?: string;
  content?: string;
}>();

const emits = defineEmits<{
  (event: "delete"): void;
}>();

function deleteRecord() {
  emits("delete");
}
</script>

<template>
  <div class="record">
    <h4>{{ time }}</h4>
    <p>{{ content }}</p>
    <button @click="deleteRecord">x</button>
  </div>
</template>
<style scoped>
.record {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  border: 1px solid black;
  margin: 10px;
  padding: 0 20px;
}
</style>
