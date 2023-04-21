<script setup lang="ts">
import allImg from "../assets/smileImg.vue";
import { ref } from "vue";

let activeSmile = ref(-1);

function clickActive(i: number) {
  activeSmile.value = i;
}
</script>

<template>
  <div class="moodLevel">
    <div class="moodLevel__smile__item" v-for="i in 5" :key="i" @click="clickActive(i)">
      <allImg :fill-color="i === activeSmile ? '#fff' : '#c80c90'" :bg-color="i === activeSmile ? '#c80c90' : '#fff'" :i="i" />
    </div>
  </div>
</template>

<style scoped>
.moodLevel {
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 45px;
  padding: 10px 15px;
  background: #ffffff;
  border-radius: 12px;
  margin: 29px 0 28px 100px;
}
@media screen and (max-width: 700px) {
  .moodLevel {
    margin-left: 47px;
  }
}
@media screen and (max-width: 637px) {
  .moodLevel {
    width: 155px;
    gap: 5px;
  }
  .moodLevel__smile__item {
    width: 26px;
  }
}
</style>
