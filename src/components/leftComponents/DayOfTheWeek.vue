<script lang="ts" setup>
const arr: string[] = ["", "mon", "tue", "wed", "thu", "fri", "sat", "sun"];
</script>

<template>
  <div class="dayOfTheWeek top">
    <div v-for="i in 7" class="dayOfTheWeekValue">
      {{ arr[i] }}
      <input type="radio" name="radioBtn" />
    </div>
  </div>
</template>

<style scoped>
.dayOfTheWeek {
  display: flex;
  width: 592px;
  height: 128px;
  left: 100px;
  top: 239px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
}
.dayOfTheWeekValue {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0 30px 55px;
}
</style>
