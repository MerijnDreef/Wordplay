<template>
    <!-- {{ this.$root.Checks }} -->
    <h1>Gebruikers Data</h1>
    <div class="userDataStyling">
        <p>Gebruikers naam: {{ userData.userName }}</p>
        <p>Gebruikers email: {{ userData.userEmail }}</p>
        <p>Gebruikers aanmeld datum: {{ userData.userCreatedAt }}</p>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
    data() {
        return {
            userId: {
                userLoginId: sessionStorage.getItem('userLogin')
            },
            userData: [] as any
        }
    },
    mounted() {
        axios
            .post('http://127.0.0.1:8000/api/userInfo', this.userId)
            .then((response) => {
                this.userData = response.data
            })
            .catch(error => {
                console.log(error)
            })
    },
}
</script>