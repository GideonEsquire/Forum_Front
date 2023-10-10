<script setup lang="ts">
import Navbar from "./components/Navbar.vue"
import Navdrawer from "./components/Navdrawer.vue"
</script>

<template>
  <v-app>
      <Navdrawer />
      <Navbar />
      <v-main>
        <RouterView />
      </v-main>
  </v-app>
</template>

<style scoped>
</style>
