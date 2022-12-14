<template>
    <div class="login">
        <form name="loginForm" @submit.prevent="postingData">
            <h1>Login</h1>
            <div v-if="Checks.status === 'False'">
                <p>these records do not match our database</p>
            </div>
            <label>Email </label>
            <input name="email" type="email" v-model="postData.email">
            <br>
            <label>Wachtwoord </label>
            <input name="password" type="password" v-model="postData.password">
            <br>
            <button>Login</button>
        </form>

        <div v-if="Checks.status === 'True'">
            <h2>Succesvolle login</h2>
        </div>
        <br>
        <RouterLink to="/register">Geen account?</RouterLink>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
    name: "LoginView",

    data() {
        return {
            postData: {
                email: '',
                password: '',
            },
            Checks: []
        }
    },

    methods: {
        postingData() {
            axios
                .post('http://127.0.0.1:8000/api/login', this.postData)
                // .then((response) => console.log(response))
                .then((response) => {
                    this.Checks = response.data
                })
        }
    }
}
</script>

<style>
@media (min-width: 1024px) {
    .login {
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>