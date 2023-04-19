<template>
  <div class="notes top">
    <h3 class="notes__h3">Notes</h3>
    <textarea placeholder="Type here" class="notes__txtArea"></textarea>
  </div>
</template>
<style scoped>
.notes {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px 0 0 42px;
  width: 648px;
  height: 223px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
}
.notes__h3 {
  padding-bottom: 8px;
  width: 620px;
  border-bottom: 1px solid #b0b0b0;
}
.notes__txtArea {
  margin-top: 8px;
  width: 615px;
  height: 150px;
  border: none;
}
</style>
