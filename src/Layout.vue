<script lang="ts" setup>
import date from "./components/leftComponents/Date.vue";
import record from "./components/leftComponents/Record.vue";
import dayOfTheWeek from "./components/leftComponents/DayOfTheWeek.vue";
import note from "./components/leftComponents/Note.vue";
import smile from "./components/rightComponents/Smile.vue";
</script>

<template>
  <date></date>
  <dayOfTheWeek></dayOfTheWeek>
  <div class="separation">
    <div>
      <record></record>
      <note></note>
    </div>
    <div>
      <smile></smile>
    </div>
  </div>
</template>

<style scoped>
.separation {
  display: flex;
}
</style>
