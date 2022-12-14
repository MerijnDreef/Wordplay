<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// import axios from 'axios';
import Navigate from "./components/Navigation.vue";
</script>

<template>
  <header>
    <div>
      <RouterLink to="/login">login</RouterLink>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">login</RouterLink>
        <RouterLink to="/register">register</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
  <Navigate />
</template>

<style scoped>
/*  */
</style>
