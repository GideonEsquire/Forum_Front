<script setup lang="ts">
import FullMessage from "@/components/Fullmessage.vue"

const messagesList = [
"adipisicing elit. Cum voluptatibus voluptates numquam, asperiores, vero est itaque odio excepturi quam ab repudiandae veritatis iure nulla, quas eius! Tenetur sed culpa cumque!",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In facilis quae, eligendi dicta praesentium obcaecati iusto rerum non magnam similique placeat eaque deserunt at magni eius, iste neque! Quasi, molestiae?",
"elit. Cum voluptatibus voluptates numquam, asperiores, vero est itaque odio excepturi quam ab repudiandae veritatis iure nulla, quas eius! Tenetur sed culpa cumque!",
"L, consectetur adipisicing elit. In facilis quae, eligendi dicta praesentium obcaecati iusto rerum non magnam similique placeat eaque deserunt at magni eius, iste neque! Quasi, molestiae?",
"L,similique placeat eaque deserunt at magni eius, iste neque! Quasi, molestiae?",
"elit. Cum voluptatibus voluptates numquam, asperiores, vero est itaque odio excepturi quam ab repudiandae veritatis iure nulla, quas eius! Tenetur sed culpa cumque!",
" quam ab repudiandae veritatis iure nulla, quas eius! Tenetur sed culpa cumque!",
"asperiores, vero est itaque odio excepturi quam ab repudiandae veritatis iure nulla, quas eius! Tenetur sed culpa cumque!",
]
</script>

<template>
  <div>
    <v-main>
      <v-container>
        <h1>Stream</h1>
        <FullMessage v-for="item in messagesList">
        {{item}}
        </FullMessage>
      </v-container>
    </v-main>
  </div>
</template>

<style scoped>
</style>
