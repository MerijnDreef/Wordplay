<template>
  <header>
    <div class="currentItem">
      <!-- <RouterLink to="/login">login</RouterLink> -->
      <div>
        <Login @userInfo="dataMethod($event)" />
      <p> {{ props.userInfo }}</p>
      </div>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">login</RouterLink>
        <RouterLink to="/register">register</RouterLink>
      </nav> -->
      <RouterView />

    </div>

  </header>

  <Navigate />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from 'vue'
// import axios from 'axios';
import Navigate from "./components/Navigation.vue";
import Login from "./views/LoginView.vue";

const props = defineProps<{
  status: Boolean,
  token: String,
  user: Number
}>()

// const emit = defineEmits<{
//   (e: 'userInfo'): void
// }>()

function dataMethod(data) {
  console.log(data);
  console.log("man");
  this.props = data;
}

// return { userInfo };

// const userInfo = ref()

// export default {
//   components: {
//     Login,
//   },
//   props: {
//     userInfo: Array,
//   }
// }
</script>

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
