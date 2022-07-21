<script setup>
import { useRoute } from "vue-router";
import { useCounterStore } from "@/stores/counter";
import Counter from "@/components/Counter.vue";

const route = useRoute();
const conterStore = useCounterStore();
const increment = () => {
  conterStore.$patch((state) => {
    state.count++;
  });
};
const decrement = () => {
  conterStore.$patch((state) => {
    state.count--;
  });
};
const reset = () => {
  conterStore.$reset();
};
</script>

<template>
  <div class="admin">
    <div class="main">
      <div>
        <h1 class="title">DASBOARD {{ route.name }}</h1>
        <h3>Counter with button</h3>
        <h5>Menubah state langsung menggunakan tombol</h5>
      </div>
      <div>
        <button class="btn error" @click="decrement">-</button>
        <button class="btn primary" @click="increment">+</button>
        <button class="btn info" @click="reset">Reset</button>
      </div>
    </div>

    <Counter />
  </div>
</template>
<style scoped>
h1.title {
  text-transform: uppercase;
}
div.admin div.main {
  background: rgba(60, 60, 60, 0.29);
  color: white;
  padding: 12px;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
