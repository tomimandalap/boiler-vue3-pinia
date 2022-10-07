<script setup>
import { computed } from "vue";
import { useLoadingStore } from "@/stores/loading";

const loadingStore = useLoadingStore();

const loading = computed({
  get() {
    return loadingStore.overlay;
  },
  set(val) {
    return loadingStore.setOverlay(val);
  },
});
</script>
<template>
  <div v-if="loading" class="load">
    <h1>LOADING</h1>
  </div>
</template>
<style scoped>
.load {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
