<template>
    <div  v-for="index in sessionHistory.length['session_id']" :key="index">

        <!-- <p>{{ sessionHistory }}</p> -->
        <!-- <p>{{ sessionHistory.length['session_id'] }}</p> -->
        <p>{{ sessionHistory.sessionData[index]['time_session_start'] }}</p>
        <p>{{ index }}</p>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import router from '@/router';

export default {
    data() {
        return {
            sendData: {
                userId: sessionStorage.getItem('userLogin')
            },
            loopLength: 0,
            sessionHistory: [],
        }
    },
    mounted() {
        axios
            .post('http://127.0.0.1:8000/api/historySessions', this.sendData)
            .then((response) => {
                this.sessionHistory = response.data
                //show data in view
            }).then((response) => {this.historyLoop(response.data)})
            .catch(error => {
                console.log(error)
            })
    },
    methods: {
        historyLoop(length){
            this.loopLength = length;
        }
    },

}
</script>

<style>

</style>