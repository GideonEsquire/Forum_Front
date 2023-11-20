<script setup lang="ts">
</script>

<template>
  <div>

    <!-- TODO: Add colored line on left to indicate level of nesting -->
    <!-- TODO: Have a hidden menu under card to hide this message or all messages from this author -->
    <v-card class="pa-5 mb-4">
      <p>
      <slot></slot>
      </p>

      <!-- TODO: When clicked, popup with author Name and button to set filter of the author. -->
      <v-avatar>
        <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
            ></v-img>
      </v-avatar>

      <!-- TODO: Toggle star.  -->
      <v-btn>
        <v-tooltip open-delay="500" activator="parent" location="top" >Save this message</v-tooltip>
        <v-icon icon="mdi-star"></v-icon></v-btn>

      <!-- TODO: Toggle view properties -->
      <v-btn>
        <v-tooltip open-delay="500" activator="parent" location="top" >View properties</v-tooltip>
        <v-icon icon="mdi-hamburger"></v-icon>
      </v-btn>
      <v-btn>
        <v-tooltip open-delay="500" activator="parent" location="top" >Reply to this message</v-tooltip>
        <v-icon icon="mdi-comment"></v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<style scoped>
</style>
