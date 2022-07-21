<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const fullpath = ref(false);
const logout = () => {
  localStorage.removeItem("auth");
  router.push("/");
};

onUpdated(() => {
  fullpath.value = route.fullPath.includes("pokemon");
});

onMounted(() => {
  fullpath.value = route.fullPath.includes("pokemon");
});
</script>
<template>
  <div class="layout-admin">
    <nav class="navbar">
      <div>
        <router-link to="/admin">Dasboard</router-link>
        <router-link
          to="/admin/pokemon-list"
          :class="fullpath ? 'router-link-exact-active' : ''"
        >
          Pokemon
        </router-link>
        <router-link to="/admin/about">About</router-link>
      </div>

      <button @click="logout" class="btn-logout">Logout</button>
    </nav>

    <div class="content">
      <RouterView />
    </div>

    <footer class="footer">
      Created by
      <a href="https://github.com/tomimandalap" target="_blank" class="link">
        tomimandalap
      </a>
      &copy; 2022
    </footer>
  </div>
</template>
<style scoped>
div.layout-admin {
  min-height: 100vh;
  max-width: 1904px;
  margin: 0 auto;
  padding: 80px 0 0 0;
}

nav.navbar {
  width: 1904px;
  max-width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background: white;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  margin: 0 auto;
}

button.btn-logout {
  width: 150px;
  height: 38px;
  background: teal;
  border: none;
  color: white;
  margin: 8px 0;
}

button.btn-logout:hover {
  cursor: pointer;
  background: rgb(20, 147, 147);
  transition: all 100ms ease-in-out;
}

div.content {
  min-height: 100vh;
  padding: 0 32px;
}

footer.footer {
  width: 1904px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  background: rgba(60, 60, 60, 0.29);
  color: white;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer.footer a.link {
  color: red;
}
</style>
