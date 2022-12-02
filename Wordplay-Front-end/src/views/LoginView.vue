<template>
    <div class="login">
        <form name="loginForm" @submit.prevent="postingData">
            <h1>Login</h1>
            <div v-if="Checks.emailWrong === 'True'">
                <p>The email is not correct</p>
            </div>
            <label>Email </label>
            <input name="email" type="email" v-model="postData.email">
            <br>
            <div v-if="Checks.passwordWrong === 'True'">
                <p>The password is not correct</p>
            </div>
            <label>Password </label>
            <input name="new-password" type="new-password" v-model="postData.password">
            <br>
            <button>Login</button>
        </form>

        <div v-if="Checks.status === 'True'">
            <p>I work now</p>
        </div>
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
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>