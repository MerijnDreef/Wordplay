<template>
    <div v-if="historySelect === true">
        <RouterLink to="/profile">Terug naar profiel</RouterLink>
        <div v-for="index in sessionHistory.length" :key="index">
            <button @click="historyGet(index - 1)" class="spacingHistory">bekijk deze sessie</button>
            <p class="numbering">{{ sessionHistory.sessionData[index - 1]['time_session_start'] }}</p>
        </div>
    </div>
    <div v-if="historyChosen === true">
        <button @click="historyUnselect()">ga terug</button>
        <div v-for="index in 19" :key="index">
            <div
                v-if="sessionResultHistory.words[index - 1].article_words[0]['article_id'] === sessionResultHistory.sessionData[index - 1]['answer_id']">
                <div v-if="sessionResultHistory.sessionData[index - 1]['answer_id'] === 1">
                    <p class="numbering">{{ index }}. </p>
                    <p class="correct">De {{ sessionResultHistory.words[index - 1]['word'] }}</p>
                </div>
                <div v-else-if="sessionResultHistory.sessionData[index - 1]['answer_id'] === 2">
                    <p class="numbering">{{ index }}. </p>
                    <p class="correct">Het {{ sessionResultHistory.words[index - 1]['word'] }}</p>
                </div>
            </div>
            <div
                v-else-if="sessionResultHistory.words[index - 1].article_words[0]['article_id'] !== sessionResultHistory.sessionData[index - 1]['answer_id']">
                <div v-if="sessionResultHistory.sessionData[index - 1]['answer_id'] === 1">
                    <p class="numbering">{{ index }}. </p>
                    <p class="wrong">De {{ sessionResultHistory.words[index - 1]['word'] }}</p>
                </div>
                <div v-else-if="sessionResultHistory.sessionData[index - 1]['answer_id'] === 2">
                    <p class="numbering">{{ index }}. </p>
                    <p class="wrong">Het {{ sessionResultHistory.words[index - 1]['word'] }}</p>
                </div>
            </div>
        </div>
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
        historyGet(result) {
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
        },

        historyUnselect(){
            this.historySelect = true
            this.historyChosen = false
        }
    },

}
</script>

<style>
.correct {
    background-color: rgba(15, 224, 19, 0.5);
    display: inline-block;
    padding: 0 1rem;
}

.wrong {
    background-color: rgba(220, 12, 12, 0.5);
    display: inline-block;
    padding: 0 1rem;
}

.numbering {
    display: inline;
}

.spacingHistory{
    display: inline-block;
    margin-right: 1rem;
}
</style>