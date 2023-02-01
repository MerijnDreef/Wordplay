<template>
    <div class="challenges">
        <h1>Welk lidwoord hoort hierbij?</h1>
        <div v-if="QuestionShow === true">
            <h1>{{ ChallengeQuestions.challenge[QuestionCounter][0]["word"] }}</h1>
        </div>
        <button :disabled="isDisabled" @click="answer(1, 'De')">De</button>
        <button :disabled="isDisabled" @click="answer(2, 'Het')">Het</button>
        <div v-if="finished === true">
            <h2>je bent klaar</h2>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            QuestionCounter: 0,
            i: 0,
            Limit: 19,
            DeAnswer: '',
            HetAnswer: '',
            QuestionShow: false,
            ChallengeQuestionId: [] as any,
            ChallengeQuestions: [] as any,
            finished: false,
            challengeData: {
                userId: sessionStorage.getItem('userLogin'),
                ChallengeQuestionAnswered: [] as any,
                ChallengeQuestionAnsweredResult: [] as any,
                timestamp: '',
            },
            testing: [],
            isDisabled: false,

        }
    },
    async mounted() {
        // this.challenges()

        await axios
            .post('http://127.0.0.1:8000/api/challenge', this.ChallengeQuestionId)
            .then((response) => {
                this.ChallengeQuestions = response.data
                this.QuestionShow = true
                //show data in view
            })
            .catch(error => {
                console.log(error)
            })
    },
    methods: {
        async challenges() {
            for (this.i = 0; this.i < 20; this.i++) {
                this.ChallengeQuestionId.push({ challengeId: (Math.floor(Math.random() * (29129 - 1 + 1)) + 1) });
            }
        },

        answer(answer: number, chosenAnswer: string) {

            if (this.ChallengeQuestions.answers[this.QuestionCounter][0]['article_id'] === answer && chosenAnswer === 'De') {
                Swal.fire({
                    icon: 'success',
                    title: 'Correct',
                    text: 'Het juiste lidwoord voor ' + this.ChallengeQuestions.challenge[this.QuestionCounter][0]["word"] + ' is De',
                })
                // this.challengeData.ChallengeQuestionAnsweredResult[this.QuestionCounter] = 1;
            } else if (this.ChallengeQuestions.answers[this.QuestionCounter][0]['article_id'] === answer && chosenAnswer === 'Het') {
                Swal.fire({
                    icon: 'success',
                    title: 'Correct',
                    text: 'Het juiste lidwoord voor ' + this.ChallengeQuestions.challenge[this.QuestionCounter][0]["word"] + ' is Het',
                })
                // this.challengeData.ChallengeQuestionAnsweredResult[this.QuestionCounter] = 2;
            } else if (this.ChallengeQuestions.answers[this.QuestionCounter][0]['article_id'] !== answer && chosenAnswer !== 'De') {
                Swal.fire({
                    icon: 'error',
                    title: 'helaas het juiste lidwoord is De voor ' + this.ChallengeQuestions.challenge[this.QuestionCounter][0]["word"],
                })
                // this.challengeData.ChallengeQuestionAnsweredResult[this.QuestionCounter] = 1;
            } else if (this.ChallengeQuestions.answers[this.QuestionCounter][0]['article_id'] !== answer && chosenAnswer !== 'Het') {
                Swal.fire({
                    icon: 'error',
                    title: 'helaas het juiste lidwoord is Het voor ' + this.ChallengeQuestions.challenge[this.QuestionCounter][0]["word"],
                })
                // this.challengeData.ChallengeQuestionAnsweredResult[this.QuestionCounter] = 2;
            }
            if (this.QuestionCounter != this.Limit) {
                this.challengeData.ChallengeQuestionAnsweredResult[this.QuestionCounter] = this.ChallengeQuestionId[this.QuestionCounter].challengeId
                this.challengeData.ChallengeQuestionAnswered[this.QuestionCounter] = answer;
                this.QuestionCounter++;

            } else {
                this.finished = true;
                console.log("limit answers reached");
                this.isDisabled = true;
                axios
                    .post('http://127.0.0.1:8000/api/sessionSend', this.challengeData)
                    .then((response) => {
                        this.testing = response.data
                    })
            }
        },

        getNow: function () {
            const today = new Date();
            const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date + ' ' + time;
            this.challengeData.timestamp = dateTime;
        }
    },
    created() {
        this.challenges();
        this.getNow();
    }
}
</script>

<style>
.challenges {
    text-align: center;
}
</style>