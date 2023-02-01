<template>
    <div>
        <h1>Difficult page waiting for updates</h1>
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
export default {
    data() {
        return {
            DeAnswer: '',
            HetAnswer: '',
        }
    },
    methods: {
        answer(answer: string) {
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