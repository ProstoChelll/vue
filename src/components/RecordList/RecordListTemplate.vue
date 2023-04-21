<script lang="ts" setup>
import { Ref, ref } from "vue";
import RecordList from "./RecordList.vue";

interface IRecord {
  inputValue: string;
  selectValue: string;
}

const inputValue = ref("");
const selectValue = ref("6.00");
const recordList = ref([]) as Ref<IRecord[]>;

for (let i = 0; i < 21; i++) {
  const localStor = localStorage.getItem(`record${i}`);
  if (localStor !== null) {
    recordList.value.push({
      inputValue: localStor,
      selectValue: String(`${i}.00`),
    });
  }
}

function setInputValue(event: any) {
  inputValue.value = event.target.value;
}

function setSelectValue(event: any) {
  selectValue.value = event.target.value;
}

function createRecord() {
  const searchElement = recordList.value.find((arr) => arr.selectValue === selectValue.value);
  if (selectValue.value == searchElement?.selectValue) {
    for (let i = 0; i < recordList.value.length; i++) {
      if (selectValue.value == recordList.value[i].selectValue && inputValue.value !== "") {
        recordList.value[i].inputValue = inputValue.value;
      }
    }
  } else if (inputValue.value !== "") {
    recordList.value.push({
      inputValue: inputValue.value,
      selectValue: selectValue.value,
    });
  }
  const num: number = Number(selectValue.value.slice(0, 2));
  localStorage.setItem(`record${num}`, inputValue.value);
  inputValue.value = "";
}

function deleteRecord(time: string) {
  recordList.value = recordList.value.filter((record) => record.selectValue !== time);
  const realTime = Number(time.slice(0, 2));
  localStorage.removeItem(`record${realTime}`);
}
</script>

<template>
  <div class="record__list top">
    <div class="controller">
      <select :value="selectValue" @change="(event) => setSelectValue(event)">
        <option v-for="i in 21">{{ i }}.00</option>
      </select>
      <input :value="inputValue" @input="(e) => setInputValue(e)" />
      <button @click="createRecord">add record</button>
    </div>

    <RecordList
      v-for="record in recordList"
      :key="record.selectValue"
      :time="record.selectValue"
      :content="record.inputValue"
      @delete="deleteRecord(record.selectValue)"
    >
    </RecordList>
  </div>
</template>

<style scoped>
.record__list {
  width: 688px;
  height: auto;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
}
.controller {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  margin: 43px 0 19px 44px;
  padding: 0;
  gap: 10px;
}
@media screen and (max-width: 700px) {
  .record__list {
    width: 635px;
  }
}
@media screen and (max-width: 637px) {
  .record__list {
    width: 435px;
  }
}
</style>
