<script setup lang="ts">
// import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <RouterLink to="/easy">easy</RouterLink>
    <br>
    <RouterLink to="/difficult">difficult</RouterLink>
    <br>
    <div class="one"></div>
    <div class="three"></div>
    <div class="two"></div>


  </main>
</template>

<style scoped>
/* 
standaard achtergrond kleur #FAFAFA
Accent kleur (word gebruikt voor randen voor knoppen of om dingen te scheiden) #EBEBEB
Extra accent kleur (voorgrond kleur) #FFFFFF */
.one {
  background-color: #FAFAFA;
  padding: 5rem;
}

.two {
  background-color: #EBEBEB;
  padding: 5rem;
}

.three {
  background-color: #FFFFFF;
  padding: 5rem;
}
</style>
