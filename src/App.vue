<script lang="ts" setup>
import { ref } from "vue";

interface IRecord {
  inputValue: string | number;
  selectValue: string;
}

let inputValue = "";
let selectValue = "";
let recordList: IRecord[] = [];

for (let i = 0; i <= 22; i++) {
  recordList.push({ inputValue: i, selectValue: "" });
}
console.log(recordList);

function inputСhanges(event: any) {
  selectValue = event.target.value;
}

function selectChanges(event: any) {
  inputValue = event.target.value;
}

function addRecordInHtml(inputValue: number | string | undefined, selectValue: string | undefined) {
  const div = document.querySelector(".recordListHtml");
  const htmlRecord = document.createElement("div");
  htmlRecord.innerHTML = `<p>${inputValue}</p><p>${selectValue}</p>`;
  htmlRecord.classList.add(`record${inputValue}`);
  div?.append(htmlRecord);
}

function addRecord() {
  for (let i = 0; i <= 21; i++) {
    if (inputValue.slice(0, 2) == recordList[i].inputValue && selectValue != "") {
      if (inputValue.slice(0, 2) == recordList[i].inputValue && recordList[i].selectValue != "") {
        recordList[i].selectValue = selectValue;
        console.log(recordList);
      } else {
        recordList[i].selectValue = selectValue;
        addRecordInHtml(recordList[i].inputValue, recordList[i].selectValue);
        console.log(321);
      }
    }
  }
}
</script>

<template>
  <div class="body">
    <div>
      <select v-model="inputValue" @select="selectChanges" name="" id="">
        <option v-for="i in 22">{{ i }}.00</option>
      </select>
      <input v-bind:value="selectValue" @input="(e) => inputСhanges(e)" />
      <button @click="addRecord">add record</button>
    </div>
    <div class="recordListHtml"></div>
  </div>
</template>

<style scoped></style>
