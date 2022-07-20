<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div>
    <h1 class="title">DASBOARD {{ route.name }}</h1>
    <h5>Implementation state managemen Pinia</h5>
  </div>
</template>
<style scoped>
h1.title {
  text-transform: uppercase;
}
</style>
