<template>
    <h1>User Info</h1>
    <RouterLink to="/history">history</RouterLink>
    <button class="buttonSpacing" @click="removeSessionStorage">Log out</button>
</template>

<script lang="ts">
import router from '@/router';
// import axios from 'axios';

export default {
    data() {
        return {
            userId: sessionStorage.getItem('userLogin')
        }
    },
    methods: {
        removeSessionStorage() {
            sessionStorage.clear();
            router.push('/login')
        }
    },
}
</script>

<style>
.buttonSpacing{
    margin-left: 1rem;
}
</style>