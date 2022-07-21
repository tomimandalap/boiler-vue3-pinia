<script setup>
import { useRoute } from "vue-router";
// import { useCounterStore } from "@/stores/counter";

const route = useRoute();
// const counter = useCounterStore();
</script>

<template>
  <div class="pokemon">
    <div class="header">
      <h1 class="title">DASBOARD {{ route.name }}</h1>
      <h5>Implementation state managemen Pinia</h5>
    </div>
  </div>
</template>
<style scoped>
div.pokemon div.header {
  background: rgba(60, 60, 60, 0.29);
  color: white;
  padding: 12px;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1.title {
  text-transform: uppercase;
}
</style>
