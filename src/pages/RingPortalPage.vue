<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
import request from "../request/request";

interface Character {
  id: string;
  birth: string;
  name: string;
  spouse: string;
  wikiUrl: string;
}

const characterList: Ref<Character[]> = ref([]);

function get() {
  request().then((res) => {
    characterList.value = res.docs.map((doc: any) => {
      return {
        id: doc.id,
        birth: doc.birth,
        name: doc.name,
        spouse: doc.spouse,
        wikiUrl: doc.wikiUrl,
      };
    });
  });
}

onMounted(() => {
  get();
});
</script>
<template>
  <div class="wrapper">
    <div v-for="character in characterList" :key="character.id">
      <div>{{ character.name }}</div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 10px;
}
</style>
