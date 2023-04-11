<script lang="ts" setup>
import { Ref, ref } from "vue";
import Button from "./Button.vue";
import Record from "./Record.vue";

interface IRecord {
  inputValue: string;
  selectValue: string;
}

const inputValue = ref("");
const selectValue = ref("6.00");
const recordList = ref([]) as Ref<IRecord[]>;

function setInputValue(event: any) {
  inputValue.value = event.target.value;
}

function setSelectValue(event: any) {
  selectValue.value = event.target.value;
}

function createRecord() {
  if (inputValue.value !== "") {
    recordList.value.push({
      inputValue: inputValue.value,
      selectValue: selectValue.value,
    }),
      (inputValue.value = ""),
      (selectValue.value = "6.00");
  }
}
function deleteRecord(time: string) {
  recordList.value = recordList.value.filter(
    (record) => record.selectValue !== time,
  );
}
</script>

<template>
  <div class="body">
    <div class="controller">
      <select :value="selectValue" @change="(event) => setSelectValue(event)">
        <option v-for="i in 22">{{ i }}.00</option>
      </select>
      <input :value="inputValue" @input="(e) => setInputValue(e)" />
      <button @click="createRecord">add record</button>
    </div>

    <Record
      v-for="record in recordList"
      :key="record.selectValue"
      :time="record.selectValue"
      :content="record.inputValue"
      @delete="deleteRecord(record.selectValue)"
    >
    </Record>
  </div>
</template>

<style scoped>
.controller {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;

  margin: 10px;
  padding: 0;
  gap: 10px;
}
</style>
