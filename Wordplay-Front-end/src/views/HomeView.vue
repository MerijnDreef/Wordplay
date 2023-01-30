<script lang="ts">
// import TheWelcome from "../components/TheWelcome.vue";

export default {
  created() {
    const reloaded = sessionStorage.getItem('reloaded');
    if (reloaded !== 'true') {
      sessionStorage.setItem('reloaded', 'true');
      location.reload();
    }
  }
}
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <h1>
      <RouterLink to="/easy">Makkelijk</RouterLink>
    </h1>
    <br>
    <h1>
      <RouterLink to="/difficult">Moeilijk</RouterLink>
    </h1>
    <br>
    <!-- <div class="one"></div>
    <div class="three"></div>
    <div class="two"></div> -->


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
