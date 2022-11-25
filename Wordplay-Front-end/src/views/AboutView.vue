<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ posts.message }}</h3>
  </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios('http://127.0.0.1:8000/api/test')
      .then((response) => {
        this.posts = response.data
      })
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
