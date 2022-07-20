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
button.btn {
  height: 32px;
  padding: 0 12px;
  color: white;
  margin: 0 6px;
}

button.btn.error {
  background: rgb(209, 31, 31);
  border: none;
}
button.btn.error:hover {
  cursor: pointer;
  background: rgb(233, 23, 23);
  border: none;
}

button.btn.primary {
  background: rgb(31, 105, 209);
  border: none;
}
button.btn.primary:hover {
  cursor: pointer;
  background: rgb(30, 115, 233);
  border: none;
}

button.btn.info {
  background: rgb(207, 207, 207);
  border: none;
  color: black;
}
button.btn.info:hover {
  cursor: pointer;
  background: rgb(219, 218, 218);
  border: none;
}
</style>
