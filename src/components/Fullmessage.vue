<script setup lang="ts">
</script>

<template>
  <div>
    <v-card class="pa-5 mb-4">
      <p>
      <slot></slot>
      </p>
      <v-btn><v-icon start icon="mdi-check"></v-icon>cool</v-btn>
      <v-btn color="error"><v-icon start icon="mdi-close"></v-icon>not cool</v-btn>
    </v-card>
  </div>
</template>

<style scoped>
</style>
