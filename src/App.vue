<script lang="ts" setup>
import { ref } from "vue";
import Button from "./Button.vue";

interface IRecord {
  inputValue: string | number;
  selectValue: string;
}

let inputValue = "1:00";
let selectValue = "";
let recordList: IRecord[] = [];

let text = ref("Hello world");

function inputСhanges(event: any) {
  selectValue = event.target.value;
}
function selectChanges(event: any) {
  inputValue = event.target.value;
}
function addRecord() {
  const recordObj: { inputValue: string; selectValue: string } = {
    inputValue: inputValue,
    selectValue: selectValue,
  };
  recordList.push(recordObj);
}
function changeButton() {
  text.value = text.value + "!";
}
</script>

<template>
  <div class="body">
    <Button @changeButton="changeButton" :text="text"></Button>
    <div>
      <select v-model="inputValue" @select="selectChanges" name="" id="">
        <option v-for="i in 22">{{ i }}:00</option>
      </select>
      <input v-bind:value="selectValue" @input="(e) => inputСhanges(e)" />
      <button @click="addRecord">add record</button>
    </div>
  </div>
</template>

<style scoped></style>
