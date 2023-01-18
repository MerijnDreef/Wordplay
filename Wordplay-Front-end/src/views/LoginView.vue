<template>
    <div class="login" v-if="LoginActive">
        <form name="loginForm" @submit.prevent="loginDatapost">
            <h1>Login</h1>
            <div v-if="LoginChecks.status === 'False'">
                <p>these records do not match our database</p>
            </div>
            <label>Email </label>
            <input name="email" type="email" v-model="loginPostData.email">
            <br>
            <label>Wachtwoord </label>
            <input name="password" type="password" v-model="loginPostData.password">
            <br>
            <button>Login</button>
        </form>
        <br>
        <!-- <RouterLink to="/register">Geen account?</RouterLink> -->
        <button @click="loginRegisterSwitch('Register')">Geen account?</button>
    </div>

    <div class="register" v-if="RegisterActive">

        <form name="registerForm" @submit.prevent="registerDataPost">
            <h1>Register</h1>
            <div v-if="RegisterChecks.emailWrong === 'True'">
                <p>Dit account bestaat al</p>
            </div>
            <label for="email">Email </label>
            <input name="email" type="email" v-model="registerPostData.email">
            <br>
            <div v-if="RegisterChecks.passwordWrong === 'True'">
                <p>Het wachtwoord is niet correct</p>
            </div>
            <label for="password">Wachtwoord </label>
            <input name="password" type="password" v-model="registerPostData.password">
            <br>
            <div v-if="RegisterChecks.verifyPassword === 'False'">
                <p>U bent vergeten het wachtwoord in te vullen of het is verkeerd ingevuld</p>
            </div>
            <label for="passwordVerify">Wachtwoord verifiëren </label>
            <input name="passwordVerify" type="password" v-model="registerPostData.passwordVerify">
            <br>
            <button>Register</button>
        </form>
        <div v-if="RegisterChecks.status === 'True'">
            <h2>Account is aangemaakt</h2>
        </div>
        <br>
        <!-- <RouterLink to="/login">Al een account?</RouterLink> -->
        <button @click="loginRegisterSwitch('Login')">Al een account?</button>

    </div>
</template>

<script lang="ts">
import router from '@/router';
import axios from 'axios';

export default {
    name: "LoginView",
    data() {
        return {
            loginPostData: {
                email: '',
                password: '',
            },
            LoginChecks: [],
            registerPostData: {
                email: '',
                name: '',
                password: '',
                passwordVerify: '',
            },
            nameChoiceInt: {
                FirstName: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                SecondName: Math.floor(Math.random() * (29129 - 1 + 1)) + 1,
            },
            RegisterChecks: [],
            LoginActive: true,
            RegisterActive: false,
        }
    },

    methods: {
        loginDatapost() {
            axios
                .post('http://127.0.0.1:8000/api/login', this.loginPostData)
                // .then((response) => console.log(response))
                .then((response) => {
                    this.LoginChecks = response.data
                    this.logInFunction(this.LoginChecks)
                })
        },
        logInFunction(givenData) {
            sessionStorage.setItem('isAuthLogin', givenData.isAuth)
            sessionStorage.setItem('tokenLogin', givenData.token['token'])
            sessionStorage.setItem('userLogin', givenData.user)
            sessionStorage.setItem('reloaded', 'false');

            router.push('/')
        },
        registerDataPost() {
            axios
                .post('http://127.0.0.1:8000/api/register', this.registerPostData)
                // .then((response) => console.log(response))
                .then((response) => {
                    this.RegisterChecks = response.data
                })
        },

        loginRegisterSwitch(ActivePage) {
            if (ActivePage == "Login") {
                this.LoginActive = true;
                this.RegisterActive = false;
            } else if (ActivePage == "Register") {
                this.LoginActive = false;
                this.RegisterActive = true;
            }
        }
    },
    created() {
        const reloaded = sessionStorage.getItem('reloaded');
        if (reloaded !== 'true') {
            sessionStorage.setItem('reloaded', 'true');
            location.reload();
        }
    },
    mounted() {
        axios
            .post('http://127.0.0.1:8000/api/nameObtain', this.nameChoiceInt)
            .then((response) => {
                // this.NameOption = response.data
                this.registerPostData = response.data
            })
            .catch(error => {
                console.log(error)
            })
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

    .register {
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>