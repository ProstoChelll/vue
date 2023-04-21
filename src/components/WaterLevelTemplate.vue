<script setup lang="ts">
import waterImg from "../assets/waterImg.vue";
import { ref } from "vue";

let activeWater = ref(-1);

function clickActive(i: number) {
  activeWater.value = i;
}
</script>

<template>
  <div class="waterLevel">
    <p>Water:</p>
    <div class="waterLevelImage" v-for="i in 6" :key="i" @click="clickActive(i)">
      <waterImg :fill-color="i <= activeWater ? '#c80c90' : '#fff'" />
    </div>
  </div>
</template>

<style scoped>
.waterLevel {
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 45px;
  padding: 10px 15px;
  background: #ffffff;
  border-radius: 12px;
  margin-left: 82px;
}
.waterLevel > p {
  font-weight: 700;
  font-size: 18px;
  line-height: 36px;
  color: #000000;
}
.waterLevel > svg {
  padding: 5px;
}
@media screen and (max-width: 700px) {
  .waterLevel {
    margin-left: 30px;
  }
}
@media screen and (max-width: 637px) {
  .waterLevel {
    width: 173px;
    gap: 5px;
  }
  .waterLevel > p {
    font-size: 14px;
  }
  .waterLevelImage {
    width: 18px;
  }
}
</style>
