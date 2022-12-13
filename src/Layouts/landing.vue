<template>
  <div class="layout-landing">
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
div.layout-landing {
  min-height: 100vh;
  max-width: 1904px;
  margin: 0 auto;
  padding: 80px 0 0 0;
}

div.content {
  min-height: 100vh;
  padding: 0 32px;
}
</style>
