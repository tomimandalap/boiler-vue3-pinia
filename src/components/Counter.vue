<script setup>
import { computed } from "vue";
import { useCounterStore } from "@/stores/counter";

const conterStore = useCounterStore();
const count = computed(() => conterStore.count);
const perKalian = computed(() => conterStore.doubleCount);
const dynamicCount = computed(() => conterStore.dynamicCount(2));
</script>
<template>
  <div class="counter">
    <h3>Count: {{ count }}</h3>
    <h3>Perkalian: {{ perKalian }}</h3>
    <h3>Pembagian: {{ dynamicCount }}</h3>
  </div>
</template>
<style scoped>
div.counter {
  background: rgba(60, 60, 60, 0.29);
  color: white;
  padding: 12px;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p.sub-title {
  font-size: 12px;
}

span {
  margin: 0 6px;
}
</style>
