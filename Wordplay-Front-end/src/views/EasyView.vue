<template>
    <div class="challenges">
        <h1>Welk lidwoord hoort hierbij?</h1>
        <div v-if="QuestionShow === 'True'">
            <h1>{{ ChallengeQuestions.challenge[QuestionCounter][0]["word"] }}</h1>
        </div>
        <button @click="answer(1, 'De')">De</button>
        <button @click="answer(2, 'Het')">Het</button>
        <div v-if="finished === 'True'">
            <h2>je bent klaar</h2>
        </div>
        <p>{{ ChallengeQuestionAnswered }}</p>
        <p>{{ ChallengeQuestionAnsweredResult }}</p>
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
            finished: 'False',
            ChallengeQuestionAnswered: [],
            ChallengeQuestionAnsweredResult: [],
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
                    text: 'Het juiste lidwoord voor ' + this.ChallengeQuestions.challenge[this.QuestionCounter][0]["word"] + ' is De',
                })
                this.ChallengeQuestionAnsweredResult[this.QuestionCounter] = 'De';
            } else if (this.ChallengeQuestions.answers[this.QuestionCounter][0]['article_id'] === answer && chosenAnswer === 'Het') {
                Swal.fire({
                    icon: 'success',
                    title: 'Correct',
                    text: 'Het juiste lidwoord voor ' + this.ChallengeQuestions.challenge[this.QuestionCounter][0]["word"] + ' is Het',
                })
                this.ChallengeQuestionAnsweredResult[this.QuestionCounter] = 'Het';
            } else if (this.ChallengeQuestions.answers[this.QuestionCounter][0]['article_id'] !== answer && chosenAnswer !== 'De') {
                Swal.fire({
                    icon: 'error',
                    title: 'helaas het juiste lidwoord is De voor ' + this.ChallengeQuestions.challenge[this.QuestionCounter][0]["word"],
                })
                this.ChallengeQuestionAnsweredResult[this.QuestionCounter] = 'De';
            } else if (this.ChallengeQuestions.answers[this.QuestionCounter][0]['article_id'] !== answer && chosenAnswer !== 'Het') {
                Swal.fire({
                    icon: 'error',
                    title: 'helaas het juiste lidwoord is Het voor ' + this.ChallengeQuestions.challenge[this.QuestionCounter][0]["word"],
                })
                this.ChallengeQuestionAnsweredResult[this.QuestionCounter] = 'Het';
            }
            if (this.QuestionCounter != this.Limit) {
                this.ChallengeQuestionAnswered[this.QuestionCounter] = chosenAnswer;
                this.QuestionCounter++;

            } else {
                this.finished = 'True';
                console.log("limit answers reached");

            }
        }
    },
    created() {
        this.challenges();
    }
}
</script>

<style>
.challenges {
    text-align: center;
}
</style>