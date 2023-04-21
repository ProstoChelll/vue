<script lang="ts" setup>
import { ref } from "vue";
import { TodoPage, RingPortalPage } from "../pages";

const activePage = ref(0);
function setActivePage(i: number) {
  activePage.value = i;
}
</script>

<template>
  <div>
    <ul class="list">
      <button @click="setActivePage(0)" class="nav-btn">Ежедневник</button>
      <button @click="setActivePage(1)" class="nav-btn">
        Портал по вселенной LoR
      </button>
    </ul>
  </div>
  <div>
    <TodoPage v-if="activePage == 0" />
    <RingPortalPage v-if="activePage == 1" />
  </div>
</template>
<style scoped>
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 20px;
}
.nav-btn {
  width: 50%;
  height: 40px;
  background: #ff81ff;
  border-radius: 12px;
  border: 2px solid #692169;
  transition: all 0.3s ease;
}
.nav-btn:hover {
  background: #692169;
  color: #ff81ff;
}
</style>
