<template>
  <div class="about">
    <h1>This is the start of leaderbaord, awaiting construction</h1>
    <h3>{{ posts.message }}</h3>
    <p>{{ getPosts }}</p>
  </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      getPosts: [],
    }
  },
  mounted() {
    axios('http://127.0.0.1:8000/api/test')
      .then((response) => {
        this.posts = response.data
      })

      axios('http://127.0.0.1:8000/api/getWords')
      .then((response) => {
        this.getPosts = response.data
      })
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}
</style>
