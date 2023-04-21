<script lang="ts" setup>
import DateTimeTemplate from "../components/DateTimeTemplate.vue";
import WeekTemplate from "../components/WeekTemplate.vue";
import RecordListTemplate from "../components/RecordList/RecordListTemplate.vue";
import MoodLevelTemplate from "../components/MoodLevelTemplate.vue";
import WaterLevelTemplate from "../components/WaterLevelTemplate.vue";
</script>

<template>
  <div class="layout">
    <div class="layout__separation">
      <DateTimeTemplate />
      <div class="layout__separation__bottom">
        <MoodLevelTemplate />
        <WaterLevelTemplate />
      </div>
    </div>
    <WeekTemplate />
    <RecordListTemplate />
  </div>
</template>

<style scoped>
.layout__separation {
  display: flex;
  align-items: center;
}
.layout__separation__bottom {
  display: flex;
  flex-direction: column;
}
</style>
