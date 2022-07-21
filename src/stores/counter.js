import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    dynamicCount: (state) => (result) => state.count / result,
  },
  actions: {
    increment(result) {
      this.count += result;
    },
    decrement(result) {
      this.count -= result;
    },
    resetcounter() {
      this.count = 0;
    },
  },
});
