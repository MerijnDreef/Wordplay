<template>
    <div v-if="historySelect === true">
        <div v-for="index in sessionHistory.length" :key="index">

            <!-- <p>{{ sessionHistory }}</p> -->
            <!-- <p>{{ sessionHistory.length }}</p> -->
            <button @click="historyTest(index - 1)">bekijk deze sessie</button>
            <p>{{ sessionHistory.sessionData[index - 1]['time_session_start'] }}</p>
            <!-- <p>{{ index }}</p> -->
        </div>
    </div>
    <div v-if="historyChosen === true">
        <div v-for="index in 19" :key="index">
            <p>{{ sessionResultHistory.sessionData[index - 1] }}</p>
        </div>
    </div>
    <p>{{ sessionResultHistory.waagh }}</p>
    <p>{{ sessionResultHistory.woId }}</p>
    <p>{{ sessionResultHistory.wordData }}</p>
    <p>{{ sessionResultHistory.artData }}</p>
    <p>{{ sessionsendData.sessionId }}</p>
    <p>{{ sessionResultHistory.sessionHistoryIds }}</p>
    <p>{{ sessionResultHistory.words }}</p>

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
            sessionHistory: [],
            sessionResultHistory: [],
            historySelect: true,
            historyChosen: false,
            sessionsendData: {
                sessionId: '',
            },
        }
    },
    mounted() {
        axios
            .post('http://127.0.0.1:8000/api/historySessions', this.sendData)
            .then((response) => {
                this.sessionHistory = response.data
                //show data in view
            })
            .catch(error => {
                console.log(error)
            })
    },
    methods: {
        // historyLoop(length){
        //     this.loopLength = length;
        // }
        historyTest(result) {
            this.sessionsendData.sessionId = this.sessionHistory.sessionData[result]['session_id']

            console.log(result)
            this.sessionHistory.sessionData[result]['session_id']
            console.log(this.sessionHistory.sessionData[result]['session_id'])


            axios
                .post('http://127.0.0.1:8000/api/historyAnswers', this.sessionsendData)
                .then((response) => {
                    this.sessionResultHistory = response.data
                    //show data in view
                })
                .catch(error => {
                    console.log(error)
                })


            this.historySelect = false
            this.historyChosen = true
        }
    },

}
</script>

<style>

</style>