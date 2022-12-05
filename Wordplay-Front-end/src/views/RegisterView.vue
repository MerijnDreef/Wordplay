<template>
    <div class="register">
        <form name="registerForm" @submit.prevent="postingData">
            <h1>Register</h1>
           
            <label for="username">Username </label>
            <input name="username" type="text" v-model="postData.name">
            <br>
            <div v-if="Checks.emailWrong === 'True'">
                <p>this account is already registered</p>
            </div>
            <label for="email">Email </label>
            <input name="email" type="email" v-model="postData.email">
            <br>
            <div v-if="Checks.passwordWrong === 'True'">
                <p>The password is not correct</p>
            </div>
            <label for="password">Password </label>
            <input name="password" type="password" v-model="postData.password">
            <br>
            <div v-if="Checks.verifyPassword === 'False'">
                <p>Password is either missing or not type correctly</p>
            </div>
            <input name="passwordVerify" type="password" v-model="postData.passwordVerify">
            <br>    
            <button>Register</button>
        </form>
        <div v-if="Checks.status === 'True'">
            <h2>Account succesfully made</h2>
        </div>
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
            Checks: []
        }
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

    // var bodyFormData = new FormData(),
    // bodyFormData.append('userName', 'Fred'),

    // axios({
    //     method: "post",
    //     url: "myurl",
    //     data: bodyFormData,
    //     headers: { "Content-Type": "multipart/form-data" },
    // })
    // .then(function (response) {
    //     //handle success
    //     console.log(response);
    // })
    //     .catch(function (response) {
    //         //handle error
    //         console.log(response);
    //     });
}

</script>

<style>
@media (min-width: 1024px) {
    .register {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>