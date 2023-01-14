<template>
    <!-- {{ this.$root.Checks }} -->
    <h1>User Data</h1>
</template>

<script lang="ts">
import axios from 'axios';

export default {
data(){
    return {
        userId: sessionStorage.getItem('userLogin'),
        userData: []
    }
},
    mounted() {
    axios
        .post('http://127.0.0.1:8000/api/nameObtain', this.userId)
        .then((response) => {
            // this.NameOption = response.data
            this.userData = response.data

        })
        .catch(error => {
            console.log(error)
        })
},
}
</script>