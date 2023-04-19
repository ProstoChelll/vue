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
    <h4 class="record__time">{{ time }}</h4>
    <p class="record__content">{{ content }}</p>
    <button class="record__btn" @click="deleteRecord">х</button>
  </div>
</template>
<style scoped>
.record {
  display: flex;
  border-bottom: 1px solid black;
  margin: 0 46px 0 42px;
}
.record:last-child {
  margin-bottom: 42px;
}
.record__time {
  border-right: 1px solid black;
  padding: 8px 16px 8px 16px;
}
.record__content {
  padding: 8px 16px 8px 16px;
}
.record__btn {
  height: 20px;
  margin: 8px 16px 8px auto;
}
</style>
