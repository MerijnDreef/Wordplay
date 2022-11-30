<template>
    <div class="register">
        <form name="registerForm" @submit.prevent="postingData">
            <h1>Register</h1>
            <label for="email">Email </label>
            <input name="email" type="email" v-model="postData.email">
            <br>
            <label for="username">Username </label>
            <input name="username" type="text" v-model="postData.username">
            <br>
            <label for="password">Password </label>
            <input name="password" type="password" v-model="postData.password">
            <br>
            <button>Register</button>
        </form>
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
                username: '',
                password: '',
            }
        }
    },

    methods: {
        postingData() {
            axios
                .post('http://127.0.0.1:8000/api/register', this.postData)
                .then((response) => console.log(response))
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