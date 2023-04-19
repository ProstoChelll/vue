<script setup lang="ts">
import sad from "../assets/SadImg.vue";
import { ref } from "vue";

let activeSmile = ref(-1);

function hoverActive(i: number) {
  activeSmile.value = i;
}
function hoverDisable(i: number) {
  activeSmile.value = -1;
}
</script>

<template>
  <div class="moodLevel">
    <div
      class="moodLevel__smile__item"
      v-for="i in 5"
      :key="i"
      @mouseenter="hoverActive(i)"
      @mouseleave="hoverDisable(i)"
    >
      <sad
        :fill-color="i === activeSmile ? '#fff' : '#c80c90'"
        :bg-color="i === activeSmile ? '#c80c90' : '#fff'"
      />
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
  height: 60px;
  padding: 10px 15px;
  background: #ffffff;
  border-radius: 12px;
}
/* .moodLevel__smile__item {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
.moodLevel__smile__item:hover {
  background: #c80c90;
} */
</style>
