<template>
    <div>
        <h1>Welk lidwoord hoort hierbij?</h1>
        <div v-if="QuestionShow === 'True'">
            <h1>{{ ChallengeQuestions.challenge[QuestionCounter][0]["word"] }}</h1>
        </div>
        <button @click="answer(1, 'De')">De</button>
        <button @click="answer(2, 'Het')">Het</button>
        {{ ChallengeQuestions.answers }}
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

        answer(answer, chosenAnswer) {
            if (this.ChallengeQuestions.answers[this.QuestionCounter][0]['article_id'] === answer && chosenAnswer === 'De') {

                Swal.fire({
                    icon: 'success',
                    title: 'Correct',
                    text: 'Het juiste lidwoord voor {{ this.ChallengeQuestions.challenge[QuestionCounter][0]["word"] }} is [goede lidwoord]',
                })
                if (this.QuestionCounter != this.Limit) {
                    this.QuestionCounter++;

                } else {
                    console.log("limit answers reached");

                }
            } else if (this.ChallengeQuestions.answers[this.QuestionCounter][0]['article_id'] === answer && chosenAnswer === 'Het') {
                Swal.fire({
                    icon: 'success',
                    title: 'Correct',
                    text: 'Het juiste lidwoord voor  {{ this.ChallengeQuestions.challenge[QuestionCounter][0]["word"] }} is [goede lidwoord]',
                })
                if (this.QuestionCounter != this.Limit) {
                    this.QuestionCounter++;

                } else {
                    console.log("limit answers reached");

                }
            } else if(this.ChallengeQuestions.answers[this.QuestionCounter][0]['article_id'] !== answer && chosenAnswer !== 'De'){
                Swal.fire({
                    icon: 'error',
                    title: 'De',
                })
            } else if(this.ChallengeQuestions.answers[this.QuestionCounter][0]['article_id'] !== answer && chosenAnswer !== 'Het'){
                Swal.fire({
                    icon: 'error',
                    title: 'Het',
                })
            }
        }
    },
    created() {
        this.challenges();
    }
}
</script>

<style>

/* .challenges{
    margin: 0 auto;
} */
</style>