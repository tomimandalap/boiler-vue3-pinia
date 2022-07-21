<script setup>
import { onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePokemonStore } from "@/stores/pokemon";

const route = useRoute();
const router = useRouter();
const pokemonStore = usePokemonStore();

const datas = computed(() => pokemonStore.datas);

const detail = (data) => {
  const { name } = data;
  router.push(`/admin/pokemon/${name}`);
};

const load = async () => {
  await pokemonStore.getList();
};

onMounted(() => {
  load();
});
</script>

<template>
  <div class="pokemon">
    <div class="header">
      <h1 class="title">DASBOARD {{ route.name }}</h1>
      <h5>Implementation state managemen Pinia</h5>
    </div>

    <div class="list_data">
      <table class="table_data">
        <tr>
          <th>Name</th>
          <th>URL</th>
          <th>Detail</th>
        </tr>

        <tr v-for="(data, i) in datas" :key="i">
          <td>{{ data.name }}</td>
          <td>{{ data.url }}</td>
          <td>
            <button class="btn primary" @click="detail(data)">Detail</button>
          </td>
        </tr>
      </table>
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

table.table_data {
  width: 100%;
}

table.table_data th {
  color: white;
  text-align: left;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0 6px;
}

table.table_data td {
  color: white;
  text-align: left;
  font-size: 12px;
  padding: 12px 6px;
  background: rgba(60, 60, 60, 0.29);
}
</style>
