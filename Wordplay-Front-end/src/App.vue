<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from 'vue'
// import axios from 'axios';
import Navigate from "./components/Navigation.vue";

var loggedIn = sessionStorage.getItem('isAuthLogin')

</script>

<template>
  <header>
    <div class="currentItem">

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">login</RouterLink>
        <RouterLink to="/register">register</RouterLink>
      </nav> -->
      <RouterView />

    </div>

  </header>
  <div class="navStyling" v-if="loggedIn === 'True'">
    <Navigate />
  </div>
</template>

<style scoped>
/* @media (min-width: 1024px) { */
.currentItem {
  /* padding-left: 10rem; */
  text-align: center;
}

/* } */

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
