<template>
    <div class="register">

        <form name="registerForm" @submit.prevent="postingData">
            <h1>Register</h1>
            <p name="username">Username: {{ postData.name }} </p>
            <div v-if="Checks.emailWrong === 'True'">
                <p>Dit account bestaat al</p>
            </div>
            <label for="email">Email </label>
            <input name="email" type="email" v-model="postData.email">
            <br>
            <div v-if="Checks.passwordWrong === 'True'">
                <p>Het wachtwoord is niet correct</p>
            </div>
            <label for="password">Wachtwoord </label>
            <input name="password" type="password" v-model="postData.password">
            <br>
            <div v-if="Checks.verifyPassword === 'False'">
                <p>U bent vergeten het wachtwoord in te vullen of het is verkeerd ingevuld</p>
            </div>
            <label for="passwordVerify">Wachtwoord verifiëren </label>
            <input name="passwordVerify" type="password" v-model="postData.passwordVerify">
            <br>
            <button>Register</button>
        </form>
        <div v-if="Checks.status === 'True'">
            <h2>Account is aangemaakt</h2>
        </div>
        <br>
        <RouterLink to="/login">Al een account?</RouterLink>

    </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
    name: "RegisterView",

    data() {
        return {
            postData: {
                email: '',
                name: '',
                password: '',
                passwordVerify: '',
            },
            nameChoiceInt: {
                FirstName: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                SecondName: Math.floor(Math.random() * (29129 - 1 + 1)) + 1,
            },
            Checks: [],
        }
    },
    mounted() {
        axios
            .post('http://127.0.0.1:8000/api/nameObtain', this.nameChoiceInt)
            .then((response) => {
                // this.NameOption = response.data
                this.postData = response.data

            })
            .catch(error => {
                console.log(error)
            })
    },

    methods: {
        postingData() {
            axios
                .post('http://127.0.0.1:8000/api/register', this.postData)
                // .then((response) => console.log(response))
                .then((response) => {
                    this.Checks = response.data
                })
        }
    }

    // Math.floor(Math.random() * (10 - 1 + 1)) + 1;

}

</script>

<style>
@media (min-width: 1024px) {
    .register {
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>