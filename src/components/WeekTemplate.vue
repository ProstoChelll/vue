<script lang="ts" setup>
const arr: string[] = ["", "mon", "tue", "wed", "thu", "fri", "sat", "sun"];
</script>

<template>
  <div class="dayOfTheWeek top">
    <div v-for="i in 7" class="dayOfTheWeekValue">
      <p class="dayOfTheWeekValue__p">{{ arr[i] }}</p>
      <input class="dayOfTheWeekValue__input" type="radio" name="radioBtn" />
    </div>
  </div>
</template>

<style scoped>
.dayOfTheWeek {
  display: flex;
  justify-content: center;
  width: 685px;
  height: 78px;
  left: 100px;
  top: 239px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  gap: 55px;
}
.dayOfTheWeekValue {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dayOfTheWeekValue__p {
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
}
@media screen and (max-width: 700px) {
  .dayOfTheWeek {
    width: 635px;
  }
}
@media screen and (max-width: 637px) {
  .dayOfTheWeek {
    width: 435px;
  }
  .dayOfTheWeekValue__p {
    font-size: 20px;
  }
  .dayOfTheWeek {
    gap: 30px;
  }
}
</style>
