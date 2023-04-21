<script lang="ts" setup>
import { ref } from "vue";

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = ref(months[new Date().getMonth()]);
let date = ref(new Date().getDate());
let clock = ref(new Date().toLocaleTimeString());

function time() {
  clock.value = new Date().toLocaleTimeString();
}
setInterval(time, 1000);
</script>

<template>
  <div class="date">
    <div class="date__data">
      <p class="txt__date">Date:</p>
      <p class="txt__month">{{ month }}</p>
      <p class="txt__date">{{ date }}</p>
    </div>
    <div class="time__data">
      <p class="txt__time">{{ clock }}</p>
    </div>
  </div>
</template>

<style scoped>
.date {
  display: inline-flex;
  flex-direction: column;
  width: auto;
  height: 110px;
  background: #ff81ff;
  border-radius: 12px;
}
.date__data {
  display: flex;
  gap: 22px;
  height: 100px;
  margin: 0 24px 0 24px;
}
.time__data {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 20px 0 45px 24px;
}
.txt__date {
  font-weight: 400;
  font-size: 40px;
  line-height: 59px;
  color: #000000;
}
.txt__month {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 59px;
  color: #000000;
}
.txt__date {
  font-weight: 700;
  font-size: 40px;
  line-height: 59px;
  color: #000000;
}
.txt__time {
  font-weight: 400;
  font-size: 30px;
  line-height: 0px;
  color: #000000;
}
@media screen and (max-width: 637px) {
  .date {
    width: 200px;
  }
  .txt__date {
    font-size: 24px;
  }
  .txt__month {
    font-size: 29px;
  }
  .date__data {
    gap: 10px;
  }
  .txt__time {
    font-size: 25px;
  }
}
</style>
