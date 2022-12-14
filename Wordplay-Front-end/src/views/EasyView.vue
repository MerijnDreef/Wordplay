<template>
    <div>
        <h1>Welk lidwoord hoort hierbij?</h1>
        <div v-if="QuestionShow === 'True'">
            <h1>{{ ChallengeQuestions.challenge[QuestionCounter][0]["word"] }}</h1>
        </div>
        <button @click="answer('De')">De</button>
        <button @click="answer('Het')">Het</button>
        <div v-if="DeAnswer === 'True'">
            <p>You have answered with De</p>
        </div>
        <div v-if="HetAnswer === 'True'">
            <p>You have answered with Het</p>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
    data() {
        return {
            QuestionCounter: 0,
            i: 0,
            Limit: 19,
            DeAnswer: '',
            HetAnswer: '',
            QuestionShow: 'False',
            ChallengeQuestionId: [],
            ChallengeQuestions: [],
        }
    },
    async mounted() {
        // this.challenges()

        await axios
            .post('http://127.0.0.1:8000/api/challenge', this.ChallengeQuestionId)
            .then((response) => {
                this.ChallengeQuestions = response.data
                //show data in view
            }).then(this.QuestionShow = 'True')
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

        answer(answer) {
            if (answer === 'De') {
                this.DeAnswer = 'True';
                this.HetAnswer = 'False';
                if (this.QuestionCounter != this.Limit) {
                    this.QuestionCounter++;

                } else {
                    console.log("limit answers reached");

                }
            } else if (answer === 'Het') {
                this.DeAnswer = 'False';
                this.HetAnswer = 'True';
                if (this.QuestionCounter != this.Limit) {
                    this.QuestionCounter++;

                } else {
                    console.log("limit answers reached");

                }
            }
        }
    },
    created() {
        this.challenges();
    }
}
</script>