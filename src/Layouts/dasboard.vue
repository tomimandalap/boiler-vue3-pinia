<template>
  <div class="layout-admin">
    <nav>
      <router-link to="/admin">Dasboard</router-link>
      <router-link to="/admin/about">About</router-link>
    </nav>

    <RouterView />

    <footer>FOOTER</footer>
  </div>
</template>
