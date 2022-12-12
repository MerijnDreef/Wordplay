<template>
    <div>
        <h1>Welk lidwoord hoort hierbij?</h1>
        <h1>{{ ChallengeQuestions.challenge[0].word }}</h1>
        <button @click="answer('De')">De</button>
        <button @click="answer('Het')">Het</button>
        <div v-if="DeAnswer === 'True'">
            <p>You have answered with De</p>
        </div>
        <div v-if="HetAnswer === 'True'">
            <p>You have answered with Het</p>
        </div>
        <div v-if="Testing === 'True'">
            <p>its true</p>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

 // ChallengeQuestionsNumbers: [
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            //     { challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 },
            // ],

export default {
    data() {
        return {
            i: 0,
            DeAnswer: '',
            HetAnswer: '',
            Testing: '',
            ChallengeNumberNow: {
                firstNumber: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 
            },
            ChallengeQuestions: [],
        }
    },
    mounted() {
        // this.challenges()

        axios
            .post('http://127.0.0.1:8000/api/challenge', this.ChallengeNumberNow)
            .then((response) => {
                this.ChallengeQuestions = response.data

            })
            .catch(error => {
                console.log(error)
            })
    },

    methods: {
        async challenges() {
            for (this.i = 0; this.i < 20; this.i++) {
                this.ChallengeNumberNow.push({ challengeId: Math.floor(Math.random() * (29129 - 1 + 1)) + 1 })
            }
            this.Testing = 'True';

        },

        answer(answer) {
            if (answer === 'De') {
                this.DeAnswer = 'True';
                this.HetAnswer = 'False';

            } else if (answer === 'Het') {
                this.DeAnswer = 'False';
                this.HetAnswer = 'True';

            }
        }
    }
}
</script>