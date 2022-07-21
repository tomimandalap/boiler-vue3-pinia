<script setup>
import { onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePokemonStore } from "@/stores/pokemon";
import logo from "../../../assets/logo.svg";

const route = useRoute();
const router = useRouter();
const pokemonStore = usePokemonStore();

const sprites = computed(() => pokemonStore.sprites);

const load = async (name) => {
  await pokemonStore.getDetail(name);
};

onMounted(() => {
  const { params } = route;
  const name = params.detail;
  load(name);
});
</script>

<template>
  <div class="detail">
    <div class="breadcrum">
      <button class="btn error" @click="router.go(-1)">Back</button>
      <h4 class="breadcrum_title">Pokemon {{ route.params.detail }}</h4>
    </div>

    <Suspense>
      <template #default>
        <div class="row">
          <div class="col-3">
            <div class="card">
              <img
                :src="sprites.back_default ? sprites.back_default : logo"
                :alt="sprites.back_default"
                class="card-image"
              />
            </div>
          </div>

          <div class="col-3">
            <div class="card">
              <img
                :src="sprites.back_shiny ? sprites.back_shiny : logo"
                :alt="sprites.back_shiny"
                class="card-image"
              />
            </div>
          </div>

          <div class="col-3">
            <div class="card">
              <img
                :src="sprites.front_default ? sprites.front_default : logo"
                :alt="sprites.front_default"
                class="card-image"
              />
            </div>
          </div>

          <div class="col-3">
            <div class="card">
              <img
                :src="sprites.front_shiny ? sprites.front_shiny : logo"
                :alt="sprites.front_shiny"
                class="card-image"
              />
            </div>
          </div>
        </div>
      </template>
      <template #fallback>
        <h3>Loading</h3>
      </template>
    </Suspense>
  </div>
</template>
<style scoped>
div.detail div.breadcrum {
  background: rgba(60, 60, 60, 0.29);
  color: white;
  padding: 12px;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div.breadcrum h4.breadcrum_title {
  text-transform: capitalize;
}

div.card {
  background: rgba(60, 60, 60, 0.29);
}

div.card img.card-image {
  width: 100%;
  object-fit: contain;
  max-height: 200px;
}
</style>
