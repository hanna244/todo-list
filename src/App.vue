<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>TODO LIST</h1>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

h1 {
  font-size: 5rem;
  text-align: center;
}
</style>
