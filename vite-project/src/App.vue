<script lang="ts">
export default {
  data() {
    return {
      inputValue: "1:00",
      selectValue: "",
      recordList: [],
    };
  },

  methods: {
    inputСhanges(event: any) {
      this.selectValue = event.target.value;
    },
    selectChanges(event: any) {
      this.inputValue = event.target.value;
    },
    addRecord() {
      const recordObj: { inputValue: String; selectValue: String } = {
        inputValue: this.inputValue,
        selectValue: this.selectValue,
      };
      this.recordList.push(recordObj);
      console.log(typeof this.recordList);
      console.log(this.recordList);
    },
  },
};
// acvweve
// test
</script>

<template>
  <div class="body">
    <div>
      <select v-model="inputValue" @select="selectChanges" name="" id="">
        <option v-for="i in 22">{{ i }}:00</option>
      </select>
      <input v-bind:value="selectValue" @input="inputСhanges;" />
      <button @click="addRecord">add record</button>
    </div>
  </div>
</template>

<style scoped></style>
