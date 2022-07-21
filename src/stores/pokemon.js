import { defineStore } from "pinia";
import axios from "axios";
export const usePokemonStore = defineStore({
  id: "pokemon",
  state: () => ({
    datas: [],
    sprites: {},
  }),
  getters: {},
  actions: {
    getList() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((res) => {
          this.datas = res.data.results;
        })
        .catch((err) => {
          console.error("ERROR", err.response);
        });
    },
    getDetail(param) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${param}`)
        .then((res) => {
          this.sprites = res.data.sprites;
        })
        .catch((err) => {
          console.error("ERROR", err.response);
        });
    },
  },
});
